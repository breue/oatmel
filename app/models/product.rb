class Product < ApplicationRecord
	include Slugger
	belongs_to :category, optional: true
	belongs_to :place, optional: true
	has_many :reviews
	has_many :favorites
	has_many :images
	has_many :feedbacks
	has_one_attached :img_front
	has_one_attached :img_back
	has_one_attached :img_extra
	after_create :set_slug
	after_create :set_pretty_slug
	after_create :set_defaults
	after_create :compress_images
	after_create :cleanup_url
	def compress_images
		Compressor.perform_in(5.seconds, "Product", id)
	end
	def rating
		str = '%.1f' % average_rating
		return str.sub(/\.?0+$/, '')
	end
	def set_defaults
		if category = Category.where(role: "Product").where(name: self.category_name).first
		else
			category = Category.create(name: self.category_name, role: "Product")
		end
		update(:category_id => category.id)
		if place = Place.where(name: self.place_name).first
		else
			place = Place.create(name: self.place_name)
		end
		update(:place_id => place.id)
	end
	def cleanup_url
		if has_url?
			require 'uri'
			parsed = URI::parse("#{url}")
			parsed.fragment = parsed.query = nil
			parsed_url = parsed.to_s
			if "#{place_name}" == "Amazon"
				parsed_url = "#{parsed_url}".split("ref=").first
			end
			update(url: parsed_url)
		end
	end
	def tracking_url
		if "#{place_name}" == "Amazon"
			return "#{url}?_encoding=UTF8&tag=oatmel-20&linkCode=ur2"
		else
			return "#{url}?ref=oatmel.com"
		end
	end
	def view
		self.view_count += 1
		self.save
	end
	def feature
		Product.where(pick_of_the_week: true).update_all(pick_of_the_week: false)
		update(pick_of_the_week: true, picked_at: Time.now)
	end
	def self.search(query)
		words = query.to_s.downcase.strip.split.uniq
		words.inject(all) do |combined_scope, word|
		combined_scope.where("LOWER(name) LIKE ? OR LOWER(place_name) LIKE ? OR LOWER(category_name) LIKE ?", "%#{word}%", "%#{word}%", "%#{word}%")
		end
	end
	def self.search_limited(query)
		words = query.to_s.downcase.strip.split.uniq
		words.inject(all) do |combined_scope, word|
		combined_scope.where("LOWER(name) LIKE ?", "%#{word}%")
		end
	end
	def has_url?
		if "#{url}".gsub(" ", "").size > 3
			return true
		else
			return false
		end
	end
	def img_front?
		if "#{img_front_key}".size > 0
			return true
		else
			return false
		end
	end
	def img_front_url
		"#{CDN_URL}/#{img_front_key}"
	end
	def img_back?
		if "#{img_back_key}".size > 0
			return true
		else
			return false
		end
	end
	def img_back_url
		"#{CDN_URL}/#{img_back_key}"
	end
	def img_extra?
		if "#{img_extra_key}".size > 0
			return true
		else
			return false
		end
	end
	def img_extra_url
		"#{CDN_URL}/#{img_extra_key}"
	end
end