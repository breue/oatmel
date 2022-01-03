class Post < ApplicationRecord
	include Slugger
	belongs_to :user
	belongs_to :category, optional: true
	has_many :comments
	has_many :upvotes
	serialize :participants
	after_create :set_slug
	after_create :set_pretty_slug
	after_create :set_defaults
	def set_defaults
		if category = Category.where(role: "Post").where(name: self.category_name).first
		else
			category = Category.create(name: self.category_name, role: "Post")
		end
		set_participants
		user.up_post_count(1)
	end
	def add_upvote
		self.upvote_count += 1
		self.save
		set_participants
	end
	def add_comment
		self.comment_count += 1
		self.save
		set_participants
	end
	def set_participants
		3.times{p "Setting participants"}
		main_hash = {"last_updated" => Time.now}
		arr = []
		ids = (comments.pluck(:user_id) + upvotes.pluck(:user_id) + [user_id]).flatten.uniq
		User.where(id: ids).limit(12).each do |u|
			arr.push({"slug" => "#{u.pretty_slug}", "image_url" => "#{u.img}"})
		end
		main_hash["participants"] = arr
		update(participants: main_hash)
	end
	def get_participants
		require 'time'
		if participants["last_updated"]
			p last_updated = Time.parse("#{participants["last_updated"]}")
			if last_updated.utc < (Time.now - 30.minutes).utc
				set_participants
				return participants
			else
				return participants
			end
		else
			set_participants
			return participants
		end
	end
	def view
		self.view_count += 1
		self.save
	end
	def feature
		Post.where(pick_of_the_week: true).update_all(pick_of_the_week: false)
		update(pick_of_the_week: true, picked_at: Time.now)
	end
	def self.search(query)
		words = query.to_s.downcase.strip.split.uniq
		words.inject(all) do |combined_scope, word|
		combined_scope.where("LOWER(name) LIKE ? OR LOWER(description) LIKE ? OR LOWER(category_name) LIKE ?", "%#{word}%", "%#{word}%", "%#{word}%")
		end
	end
end