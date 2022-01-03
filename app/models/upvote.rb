class Upvote < ApplicationRecord
	include Slugger
	belongs_to :user
	belongs_to :post, optional: true
	belongs_to :comment, optional: true
	after_create :set_slug
	after_create :credit_poster
	def credit_poster
		if role == "Post"
			object = Post.find(post_id)
		else
			object = Comment.find(comment_id)
		end
		object.user.up_karma(1)
		object.upvote_count += 1
		object.save
	end
end