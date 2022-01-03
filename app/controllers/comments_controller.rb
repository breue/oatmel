class CommentsController < ApplicationController
	def add_comment
		@post = Post.find_by_slug(params[:post])
		@user = @current_user
		@comment = @user.comment(@post, params[:description])
		@current_user.slack(@comment) if @slack_notify
		render json: {status: "success", description: @comment.description, slug: @comment.slug, 
			user_name: @comment.user.name, user_image: @comment.user.img, 
			user_slug: @comment.user.pretty_slug}
	end
	def reply_comment
		@parent = Comment.find_by_slug(params[:replying_to])
		@user = @current_user
		@comment = @user.reply(@parent, params[:description])
		@current_user.slack(@comment) if @slack_notify
		render json: {status: "success", description: @comment.description, slug: @comment.slug, 
			user_name: @comment.user.name, user_image: @comment.user.img, 
			user_slug: @comment.user.pretty_slug}
	end
	def comment_params
		params.require(:comment).permit(:post_id, :description)
	end
end