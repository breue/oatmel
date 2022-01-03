class Feedback < ApplicationRecord
	include Slugger
	belongs_to :user
	belongs_to :review
	belongs_to :product, optional: true
	after_create :set_slug
end