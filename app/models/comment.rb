class Comment < ApplicationRecord
	include Slugger
	belongs_to :user
	belongs_to :post
	belongs_to :parent, class_name: "Comment", optional: true
    has_many :upvotes
	after_create :set_slug
	after_create :update_post_comments
	has_many :replies, -> { where.not(role: "Hidden").order(upvote_count: :desc) }, class_name: "Comment", foreign_key: :parent_id, dependent: :destroy
    scope :is_parent, -> { 
    	where(parent_id: nil)
    }
    scope :is_child, -> {
     where("parent_id IS NOT NULL")
    }
    def update_post_comments
    	post.add_comment
    end
end