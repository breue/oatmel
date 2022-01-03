class Broadcast < ApplicationRecord
	include Slugger
	after_create :set_slug
end