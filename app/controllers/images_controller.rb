class ImagesController < ApplicationController
	def create
		@product = Product.find_by_slug(params[:product])
		@image = Image.new
		@image.img = params[:additional_pic]
		@user = @current_user
		@image.user = @user
		@image.product = @product
		if @image.save
		   @user.up_post_count(1)
		   @user.up_karma(1)
		   @current_user.slack(@image) if @slack_notify
		  redirect_back fallback_location: root_path, notice: "Yay!-Image added!"
		else
		  redirect_back fallback_location: root_path, notice: "Oops-Image not added!"
		end
	end
	def upload
		if @current_user
			@decoded_file = Base64.decode64("#{params["image_data"]}".split(",").last)
			random_string = SecureRandom.hex + SecureRandom.hex + SecureRandom.hex
			@filename = "#{random_string}.jpg"
			@tmp_file = Tempfile.new(@filename)
			@tmp_file.binmode
			@tmp_file.write @decoded_file
			@tmp_file.rewind()
			@image = Image.new
			@image.role = "Temp_#{params[:role]}"
			@image.img.attach(io: @tmp_file, filename: @filename)
			@image.save
			@tmp_file.unlink
			render json: {status: "success", id: @image.slug}
		end
	end
	def image_params
		params.require(:image).permit(:role, :user_id, :product_id)
	end
end