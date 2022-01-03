module Tokenizer
	def tokenize
		require 'securerandom'
		random_string = SecureRandom.hex + SecureRandom.hex + SecureRandom.hex + SecureRandom.hex
		while self.class.name.constantize.exists?(:token => random_string)
			random_string = SecureRandom.hex + SecureRandom.hex + SecureRandom.hex + SecureRandom.hex
		end
		update_column(:token, random_string)
	end
end