class User < ApplicationRecord
	include Slugger
	include Tokenizer
	has_many :reviews
	has_many :posts
	has_many :comments
	has_many :favorites
	has_many :feedbacks
	has_many :upvotes
	has_many :notifications
	has_one_attached :image
	serialize :email_settings, Hash
	after_create :set_slug
	after_create :tokenize
	def auth(identity)
		self.update(:first_name => identity.given_name, :last_name => identity.family_name, :email => identity.email_address,
			image_url: "#{identity.avatar_url}".gsub("=s96-c", ""))
		set_pretty_slug if pretty_slug.nil?
	end
	def name
		last_initial = "#{last_name}"[0]
		return "#{first_name} #{last_initial}."
	end
	def img
		if img?
			return "#{img_url}"
		else
			return "#{image_url}"
		end
	end
	def admin?
		if role == "Admin"
			return true
		else
			return false
		end
	end
	def make_admin
		self.update(role: "Admin")
	end
	def up_karma(count)
		self.karma += count
		self.save
	end
	def up_post_count(count)
		self.post_count += count
		self.save
	end
	def favorite(product)
		Favorite.create(product_id: product.id, user_id: id, category_id: product.category_id)
	end
	def unfavorite(product)
		favorite = favorites.where(product_id: product.id).first
		favorite.destroy
	end
	def favorited?(product)
		if Favorite.where(product_id: product.id).where(user_id: id).first
			return true
		else
			return false
		end
	end
	def upvote(role, object, score)
		blob_set = {}
		blob_set["profile"] = self.profile_blob
		if role == "Post"
			blob_set["role"] = "upvoted_post"
			blob_set["post_name"] = "#{object.name}"
			blob_set["post_description"] = "#{object.description}"
			blob_set["pretty_slug"] = "#{object.pretty_slug}"
			Upvote.create(role: "Post", user_id: id, post_id: object.id, score: score)
		else
			blob_set["role"] = "upvoted_comment"
			blob_set["post_name"] = object.post.name
			blob_set["comment"] = object.description
			blob_set["pretty_slug"] = "#{object.post.pretty_slug}"
			Upvote.create(role: "Comment", user_id: id, comment_id: object.id, post_id: object.post.id, score: score)
		end
		object.user.up_karma(1)
		object.user.notify(blob_set)
	end
	def unvote(role, object)
		if role == "Post"
			upvote = Upvote.where(role: "Post").where(post_id: object.id).where(user_id: id).first
		else
			upvote = Upvote.where(role: "Comment").where(comment_id: object.id).where(user_id: id).first
		end
		upvote.destroy
		object.user.up_karma(-1)
		object.upvote_count -= 1
		object.save
	end
	def upvoted?(role, object)
		if role == "Post"
			if Upvote.where(post_id: object.id).where(user_id: id).first
				return true
			else
				return false
			end
		else
			if Upvote.where(comment_id: object.id).where(user_id: id).first
				return true
			else
				return false
			end
		end
	end
	def comment(post, description)
		selected_user = self
		comment = Comment.create(post_id: post.id, user_id: selected_user.id, description: description)
		up_post_count(1)
		if selected_user != post.user
			blob_set = {}
			blob_set["profile"] = selected_user.profile_blob
			blob_set["role"] = "post_comment"
			blob_set["post_name"] = "#{post.name}"
			blob_set["comment"] = "#{comment.description}"
			blob_set["pretty_slug"] = "#{post.pretty_slug}"
			post.user.notify(blob_set)
		end
		return comment
	end
	def reply(parent, description)
		selected_user = self
		comment = Comment.create(post_id: parent.post.id, parent_id: parent.id, user_id: selected_user.id, description: description)
		up_post_count(1)
		if selected_user != parent.user
			blob_set = {}
			blob_set["profile"] = selected_user.profile_blob
			blob_set["role"] = "reply_comment"
			blob_set["post_name"] = "#{parent.post.name}"
			blob_set["comment"] = "#{comment.description}"
			blob_set["pretty_slug"] = "#{parent.post.pretty_slug}"
			parent.user.notify(blob_set)
		end
		return comment
	end
	def notify(blob)
		self.unread_notifications += 1
		self.save
		Notification.create(user_id: id, blob: blob)
		if blob["role"] != "verified"
			if can_be_event_notified?
				EventEmailer.perform_async("Notifications", id) 
			end
		end
	end
	def reviewed?(product)
		if reviews.where(product_id: product.id).where.not(role: "Hidden").first
			return true
		else
			return false
		end
	end
	def profile_blob
		profile = {}
		profile["name"] = "#{self.name}"
		profile["image_url"] = "#{self.img}"
		profile["pretty_slug"] = "#{self.pretty_slug}"
		return profile
	end
	def verify
		self.update(verified: true)
		blob_set = {}
		blob_set["profile"] = self.profile_blob
		blob_set["role"] = "verified"
		notify(blob_set)
		EventEmailer.perform_async("Verified", id)
	end
	def unverify
		self.update(verified: false)
	end
	def slack(object)
		Slacker.perform_async(object.class.name, object.id, name)
	end
	def img?
		if "#{img_key}".size > 0
			return true
		else
			return false
		end
	end
	def img_url
		"#{CDN_URL}/#{img_key}"
	end
	def set_image_key
		self.update(img_key: image.blob.key)
	end
	def can_be_event_notified?
		if unread_notifications_batch_emails
			if last_notified_at.nil?
				return true
			elsif last_notified_at < (Time.now - 3.days)
				return true
			else
				return false
			end
		else
			return false
		end
	end
	def unsubscribe
		self.update(subscribed: false, unread_notifications_batch_emails: false, featured_batch_emails: false)
	end
end