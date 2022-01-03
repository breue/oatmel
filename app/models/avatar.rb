class Avatar < ApplicationRecord
	include Slugger
	after_create :set_slug
	has_one_attached :img
	def set_image_key
		self.update(img_key: img.blob.key)
	end
	def img?
		if "#{img_key}".size > 0
			return true
		else
			return false
		end
	end
	def img_url
		"#{CDN_URL}/#{img_key}"
	end
end