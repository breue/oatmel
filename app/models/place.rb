class Place < ApplicationRecord
	include Slugger
	has_many :products
	after_create :set_slug
	after_create :set_pretty_slug
end