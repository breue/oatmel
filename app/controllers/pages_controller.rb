class PagesController < ApplicationController
	def index
		Pagy::VARS[:items] = 15
		preserve_scroll
		return if redirecting_to_fresh_unpaginated_listing?
		query = "#{params[:query]}".downcase.gsub(' and ', '  ').gsub('&', ' ')
		if "#{query}".size > 1
			@pagy, @products = paginates(Product.search(query).where.not(role: "Hidden").order(pick_of_the_week: :desc, created_at: :desc, average_rating: :desc, rating_count: :desc))
		else
			@pagy, @products = paginates(Product.where.not(role: "Hidden").order(pick_of_the_week: :desc, created_at: :desc, average_rating: :desc, rating_count: :desc))
		end
		respond_to do |format|
		  format.html
		  format.js
		end
	end
	def about
	end
end