class Image < ApplicationRecord
	include Slugger
	belongs_to :product, optional: true
	belongs_to :user, optional: true
	has_one_attached :img
	after_create :set_slug
	after_create :compress_image
	def set_image_key
		self.update(img_key: img.blob.key)
	end
	def compress_image
		if role == "Approved"
			Compressor.perform_in(5.seconds,"Image", id)
		end
	end
	def img?
		return true
	end
	def img_url
		if "#{img_key}".size > 0
			key = img_key
		else
			key = img.blob.key
		end
		"#{CDN_URL}/#{key}"
	end
end