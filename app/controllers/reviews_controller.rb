class ReviewsController < ApplicationController
	def add_review
		@product = Product.find_by_slug(params[:slug])
		if @current_user
			if !(@current_user.reviewed?(@product))
				@review = Review.new
				@review.rating = params[:rating]
				@review.description = params[:summary]
				@user = @current_user
				@review.user = @user
				@review.product_id = @product.id
				if @review.save
				   @user.up_post_count(1)
				   @current_user.slack(@review) if @slack_notify
				   render json: {status: "success", description: @review.description, rating: @review.rating,
				   slug: @review.slug, user_name: @review.user.name, user_image: @review.user.img, 
                   user_slug: @review.user.pretty_slug}
				else
				  render json: {status: "failed"}
				end
			end
		end
	end
	def review_params
		params.require(:review).permit(:user_id, :product_id, :rating, :description)
	end
end