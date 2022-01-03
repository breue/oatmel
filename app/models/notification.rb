class Notification < ApplicationRecord
	include Slugger
	belongs_to :user
	after_create :set_slug
	serialize :blob, Hash
	def see
		self.seen = true
		self.save
	end
end