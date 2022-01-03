class Favorite < ApplicationRecord
	include Slugger
	belongs_to :user
	belongs_to :product
	after_create :set_slug
end