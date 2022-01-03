class Review < ApplicationRecord
	include Slugger
	belongs_to :user
	belongs_to :product
	has_many :feedbacks
	after_create :set_slug
	after_create :calc_average
	def calc_average
		reviews = product.reviews.where.not(role: "Hidden")
		new_average = (reviews.pluck(:rating).inject{|sum,x| sum + x }).to_f/(reviews.size)
		if reviews.size == 0
			new_average = 0.0
		else
			new_average = new_average
		end
		product.average_rating = new_average
		product.rating_count = reviews.size
		product.save
		user.verify if user.reviews.size > 2 && !(user.verified)
	end
	def rate(score, rating_user)
		Feedback.create(review_id: id, product_id: product_id, user_id: rating_user.id, score: score)
		if score == 1
			self.helpful_count += 1
			self.save
			blob_set = {}
			blob_set["profile"] = rating_user.profile_blob
			blob_set["role"] = "helpful_review"
			blob_set["product"] = "#{product.name}"
			blob_set["review_text"] = "#{description}"
			blob_set["pretty_slug"] = "#{product.pretty_slug}"
			user.up_karma(5)
			user.notify(blob_set)
		end
	end
end