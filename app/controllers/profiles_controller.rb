class ProfilesController < ApplicationController
	def show
		@user = User.find_by_pretty_slug(params[:slug])
		if "#{params[:view]}" == "Favorites"
			@favorites = @user.favorites.order("created_at DESC").paginate(:page => params[:page], :per_page => 15)
		elsif "#{params[:view]}" == "Posts"
			@posts = @user.posts.where.not(role: "Hidden").order("created_at DESC").paginate(:page => params[:page], :per_page => 6)

		else
			@reviews = @user.reviews.where.not(role: "Hidden").order("created_at DESC").paginate(:page => params[:page], :per_page => 6)
		end
		@avatars = []
		if @current_user
			if @user == @current_user
				@avatars = Avatar.where.not(role: "Hidden").order("created_at ASC")
			end
		end
		respond_to do |format|
		  format.html
		  format.js
		end
	end
	def select_avatar
		@avatar = Avatar.find_by_slug(params[:slug])
        if @current_user.image.attached?
        	@current_user.image.purge_later
        end
        @current_user.image.attach(@avatar.img.blob)
        @current_user.img_key = @avatar.img.blob.key
        @current_user.save
        redirect_back fallback_location: root_path
	end
	def remove_avatar
		@current_user.image.purge_later
		@current_user.img_key = nil
		@current_user.save
		redirect_back fallback_location: root_path
	end
end