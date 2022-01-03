class ProductsController < ApplicationController
	def show
		@product = Product.find_by_pretty_slug(params[:slug])
		@reviews = @product.reviews.where.not(role: "Hidden").order("helpful_count DESC").paginate(:page => params[:page], :per_page => 4)
		@images = @product.images.where.not(role: "Hidden").order("created_at DESC").limit(10)
		@feedbacks_given = @product.feedbacks.where(user_id: @current_user.id).pluck(:review_id) if @current_user
	end
	def create
		@product = Product.new(product_params)
		@product.place_name = "#{product_params[:place_name]}".titleize
		@product.category_name = "#{product_params[:category_name]}".titleize
		image = Image.find_by_slug(params[:front_image_id])
		@product.img_front.attach(image.img.blob)
		@product.img_front_key = image.img.blob.key
		ratio = image.img.blob.metadata['height'].to_f / image.img.blob.metadata['width'].to_f
		if ratio.nan?
            ratio = 1.3333333333333333
        else
            ratio = ratio
        end
        @product.img_ratio = ratio
		image = Image.find_by_slug(params[:back_image_id])
		@product.img_back.attach(image.img.blob)
		@product.img_back_key = image.img.blob.key
		if "#{params[:extra_image]}".size > 1
			image = Image.find_by_slug(params[:extra_image_id])
			@product.img_extra.attach(image.img.blob)
			@product.img_extra_key = image.img.blob.key
		end
		if @product.save
			@user = @current_user
			@current_user.slack(@product) if @slack_notify
			review = Review.create(product_id: @product.id, user_id: @user.id, rating: params[:rating], description: params[:review_text])
			@current_user.slack(review) if @slack_notify
			@user.up_post_count(1)
		  redirect_to "/products/#{@product.pretty_slug}"
		else
		  redirect_back fallback_location: root_path, notice: "Oops-Product not added!"
		end
	end
	def scan_products
		query = URI::decode("#{params[:query]}").to_s.force_encoding("UTF-8").downcase
	    @dupes = Product.search_limited(query).where.not(role: "Hidden").order("created_at DESC").limit(3)
	    @alts = "<strong>Did you mean one of these?</strong><br /><div class='row'>"
	    @dupes.each do |dupe|
	    	    @alts = @alts + "<div class='col-4'><a href='/products/#{dupe.pretty_slug}' style='color:#333;text-decoration:none;'>
					<div class='card'>
						<div class='card-block'>
							<img style='width:100%;height:100%;' class='pretty' src='#{dupe.img_front_url}' />
							<div style='margin-top:6px;'>
								<strong>
								#{dupe.name}
								</strong>
							</div>
							<div style='margin-top:-2px;'>
								<span style='float:right;'>
								<i class='fas fa-utensil-spoon' style='color:#6BCC00;'></i> #{dupe.rating}
								</span>
								<small style='text-muted'>#{dupe.place_name}</small>
							</div>
						</div>
					</div>
				</a></div>"
	    end
	    @alts = @alts + "</div><br />"
		render json: {status: "success", alts: @alts, dupes_size: @dupes.size}
	end
	def product_params
		params.require(:product).permit(:name, :place_name, :category_name, :url)
	end
end