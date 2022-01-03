class ApplicationController < ActionController::Base
	include Pagy::Backend
	include Pagination
	include PreserveScroll
	before_action :check_if_staging
	before_action :set_authy, except: [:authy, :unlock]
	before_action :find_current_user
	def check_if_staging
		if "#{request.base_url}".include?("play.") || "#{request.base_url}".include?("localhost")
			@play = true
		else
			@play = false
		end
		@slack_notify = true if !(@play)
	end
	def set_authy
		if @play
			if "#{cookies.encrypted[:oat_test_token] }" != "isjustwonderful!!"
				redirect_to "/authy"
			end
		end
	end
	def find_current_user
		if @current_user = User.where(token: cookies.encrypted[:oat_token]).first
			if @current_user.role == "Hidden"
				cookies.permanent.encrypted[:oat_token] = {:value => nil, :httponly => true, :secure => Rails.env.production?}
				redirect_to "/", notice: "Oops-Please contact support."
			end
		else
			@current_user = nil
		end
		if params[:controller] == 'posts'
			@categories = Category.where(role: "Post").order("name ASC").pluck(:name)
			post_names = Post.where.not(role: "Hidden").order("name ASC").pluck(:name)
			@keywords = (@categories + post_names).flatten.uniq
			@top_contributors = User.where.not(role: "Hidden").order("post_count DESC").limit(10)
			@places = []
		else
			@places = Place.order("name ASC").pluck(:name)
			@categories = Category.where(role: "Product").order("name ASC").pluck(:name)
			product_names = Product.where.not(role: "Hidden").order("name ASC").pluck(:name)
			@keywords = (@places + @categories + product_names).flatten.uniq
		end
	end
end