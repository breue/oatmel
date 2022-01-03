class PostsController < ApplicationController
	def community
		Pagy::VARS[:items] = 5
		preserve_scroll
		return if redirecting_to_fresh_unpaginated_listing?
		query = "#{params[:query]}".downcase.gsub(' and ', '  ').gsub('&', ' ')
		@pagy, @posts = paginates(Post.search(query).where.not(role: "Hidden").order("created_at DESC"))
		@picks = Post.where(pick_of_the_week: true).order("picked_at DESC").limit(1)
		respond_to do |format|
		  format.html
		  format.js
		end
	end
	def show
		require 'rails_autolink'
		@post = Post.find_by_pretty_slug(params[:slug])
		@comments = @post.comments.where(parent_id: nil).where.not(role: "Hidden").order("upvote_count DESC")
		p @upvoted_comments = @post.upvotes.where(role: 'Comment').where(user_id: @current_user.id).pluck(:comment_id) if @current_user
	end
	def create
		@post = Post.new(post_params)
		@post.category_name = "#{post_params[:category_name]}".titleize
		@post.user_id = @current_user.id
		if @post.save
			@current_user.slack(@post) if @slack_notify
		  redirect_to "/posts/#{@post.pretty_slug}"
		else
		  redirect_back fallback_location: root_path, notice: "Oops-Post not added!"
		end
	end
	def post_params
		params.require(:post).permit(:user_id, :category_name, :name, :description)
	end
end