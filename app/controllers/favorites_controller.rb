class FavoritesController < ApplicationController
	def favorite
		@product = Product.find_by_slug(params[:product])
		@current_user.favorite(@product)
		render json: {status: "success"}
	end
	def unfavorite
		@product = Product.find_by_slug(params[:product])
		@current_user.unfavorite(@product)
		render json: {status: "success"}
	end
end