class Category < ApplicationRecord
	include Slugger
	has_many :posts
	has_many :products
	after_create :set_slug
end