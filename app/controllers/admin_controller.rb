class AdminController < ApplicationController
	def hide
		if @current_user
			if @current_user.admin?
				if params[:role] == "User"
					@object = User.find_by_slug(params[:slug])
					@object.reviews.update_all(role: "Hidden")
					@object.posts.update_all(role: "Hidden")
					@object.comments.update_all(role: "Hidden")
					route = "/"
				elsif params[:role] == "Product"
					@object = Product.find_by_slug(params[:slug])
					@object.reviews.update_all(role: "Hidden")
					route = "/"
				elsif params[:role] == "Post"
					@object = Post.find_by_slug(params[:slug])
					route = "/community"
				elsif params[:role] == "Review"
					@object = Review.find_by_slug(params[:slug])
					@object.role = "Hidden"
					@object.save
					@object.calc_average
					route = "/products/#{@object.product.pretty_slug}"
				elsif params[:role] == "Comment"
					@object = Comment.find_by_slug(params[:slug])
					@object.post.comment_count -= 1
					@object.post.save
					@object.user.up_karma(-1)
					@object.user.up_post_count(-1)
					route = "/posts/#{@object.post.pretty_slug}"
				elsif params[:role] == "Image"
					@object = Image.find_by_slug(params[:slug])
					@object.user.up_karma(-1)
					@object.user.up_post_count(-1)
					route = "/products/#{@object.product.pretty_slug}"
				end
				@object.update(role: "Hidden") if @object.role != "Hidden"
				redirect_to route
			end
		end
	end
	def feature
		if @current_user
			if @current_user.admin?
				if params[:role] == "Product"
					@object = Product.find_by_slug(params[:slug])
					route = "/products/#{@object.pretty_slug}"
				elsif params[:role] == "Post"
					@object = Post.find_by_slug(params[:slug])
					route = "/community"
				end
				@object.feature
				redirect_to route
			end
		end
	end
	def promote
		if @current_user
			if @current_user.admin?
				@image = Image.find_by_slug(params[:slug])
				@product = @image.product
				if params[:role] == "Front"
					@product.img_front.purge_later
					@product.img_front.attach(@image.img.blob)
					@product.img_front_key = @image.img.blob.key
				elsif params[:role] == "Back"
					@product.img_back.purge_later
					@product.img_back.attach(@image.img.blob)
					@product.img_back_key = @image.img.blob.key
				elsif params[:role] == "Extra"
					@product.img_extra.purge_later
					@product.img_extra.attach(@image.img.blob)
					@product.img_extra_key = @image.img.blob.key
				end
				@product.save
				@image.update(role: "Hidden") 
				redirect_back fallback_location: root_path
			end
		end
	end
	def authy
		@locked = true
	end
	def unlock
		if "#{params[:token]}".downcase == "isjustwonderful!!"
			cookies.permanent.encrypted[:oat_test_token] = {:value => "isjustwonderful!!", :httponly => true, :secure => Rails.env.production?}
			redirect_to "/"
		else
			redirect_to "/authy", notice: "Oops-Invalid token!"
		end
	end
	def stats
		if @current_user
			if !(@current_user.admin?)
				redirect_to "/"
			end
		else
			redirect_to "/"
		end
	end
	def scramble
		if @current_user
			if @current_user.admin?
				@products = Product.where.not(role: "Hidden")
				@products.each do |product|
					product.created_at = rand(36.months).seconds.ago
					product.save
				end
			end
		end
		render json: {status: "success"}
	end
	def broadcast
		if @current_user
			if @current_user.admin?
				if Broadcast.where('created_at > ?', Time.now - 1.hours).size == 0
					ScheduledBatchEmailer.perform_async("Featured")
					redirect_back fallback_location: root_path, notice: "Broadcast Sending! - Featured products broadcast sending now!"
				else
					redirect_back fallback_location: root_path, notice: "Broadcast Not Sent! - Please wait an hour!"
				end
			end
		end
	end
end