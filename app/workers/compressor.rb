class Compressor
  include Sidekiq::Worker
  def perform(role, id)
	if role == "Image"
		3.times{p "Compressing image"}
		image = Image.find(id)
		if image.img.attached?
			resized_image = MiniMagick::Image.read(image.img.download)
			resized_image = resized_image.resize "1000x1000"
			v_filename = image.img.filename
			v_content_type = image.img.content_type
			image.img.purge_later
			image.img.attach(io: File.open(resized_image.path), filename:  v_filename, content_type: v_content_type)
			image.img_key = image.img.blob.key
			image.save
		end
	elsif role == "Product"
		3.times{p "Compressing images"}
		product = Product.find(id)
		if product.img_front.attached?
			resized_image = MiniMagick::Image.read(product.img_front.download)
		    resized_image = resized_image.resize "1000x1000"
		    v_filename = product.img_front.filename
		    v_content_type = product.img_front.content_type
		    product.img_front.purge_later
		    product.img_front.attach(io: File.open(resized_image.path), filename:  v_filename, content_type: v_content_type)
		    product.img_front_key = product.img_front.blob.key
		end
		if product.img_back.attached?
			resized_image = MiniMagick::Image.read(product.img_back.download)
		    resized_image = resized_image.resize "1000x1000"
		    v_filename = product.img_back.filename
		    v_content_type = product.img_back.content_type
		    product.img_back.purge_later
		    product.img_back.attach(io: File.open(resized_image.path), filename:  v_filename, content_type: v_content_type)
		    product.img_back_key = product.img_back.blob.key
		end
	    if product.img_extra.attached?
		    resized_image = MiniMagick::Image.read(product.img_extra.download)
		    resized_image = resized_image.resize "1000x1000"
		    v_filename = product.img_extra.filename
		    v_content_type = product.img_extra.content_type
		    product.img_extra.purge_later
		    product.img_extra.attach(io: File.open(resized_image.path), filename:  v_filename, content_type: v_content_type)
		    product.img_extra_key = product.img_extra.blob.key
		end
		product.save
	end
  end
end