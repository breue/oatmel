class FeedbackController < ApplicationController
	def rate_review
		@review = Review.find_by_slug(params[:review])
		@user = @current_user
		@review.rate(params[:score].to_i, @user)
		render json: {status: "success", helpful_count: @review.helpful_count}
	end
end