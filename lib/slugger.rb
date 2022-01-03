module Slugger
	def set_slug
		require 'securerandom'
		random_string = SecureRandom.hex[0..20]
		while self.class.name.constantize.exists?(:slug => random_string)
		random_string = SecureRandom.hex[0..20]
		end
		update(:slug => random_string)
	end
	def set_pretty_slug
		require 'securerandom'
		if self.class.name == "Product"
			name_slug = "#{self.name} #{self.place_name}".gsub(/[^0-9a-z ]/i, '').gsub(' ', '_')
		else
			name_slug = "#{self.name}".gsub(/[^0-9a-z ]/i, '').gsub(' ', '_')
		end
		random_string = SecureRandom.hex[0..8]
		while self.class.name.constantize.exists?(:pretty_slug => "#{name_slug}_#{random_string}")
		random_string = SecureRandom.hex[0..8]
		end
		update(:pretty_slug => "#{name_slug}_#{random_string}")
		self.slack(self) if "#{self.class.name}" == "User"
	end
end