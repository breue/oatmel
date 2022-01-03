class UpvotesController < ApplicationController
	def upvote
		if params[:role] == "Post"
			@object = Post.find_by_slug(params[:object])
		else
			@object = Comment.find_by_slug(params[:object])
		end
		@user = @current_user
		@user.upvote("#{params[:role]}", @object, 1)
		render json: {status: "success", upvote_count: @object.upvote_count}
	end
	def unvote
		if params[:role] == "Post"
			@object = Post.find_by_slug(params[:object])
		else
			@object = Comment.find_by_slug(params[:object])
		end
		@current_user.unvote("#{params[:role]}", @object)
		render json: {status: "success", upvote_count: @object.upvote_count}
	end
end