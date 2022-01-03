class Slacker
  include Sidekiq::Worker
  def perform(role, id, name)
  	3.times{p "Sending event to Slack"}
	if role == "User"
		user = User.find(id)
		mssg = "User: #{user.name} - #{ENV['ROOT_PATH']}profiles/#{user.pretty_slug}"
	elsif role == "Product"
		product = Product.find(id)
		mssg = "Product: #{product.name} by #{name} - #{ENV['ROOT_PATH']}products/#{product.pretty_slug}"
	elsif role == "Review"
		review = Review.find(id)
		if name != review.user.name
			poster = "#{name} as #{review.user.name}"
		else
			poster = "#{name}"
		end
		mssg = "Review: For #{review.product.name} by #{poster} - #{ENV['ROOT_PATH']}products/#{review.product.pretty_slug}"
	elsif role == "Post"
		post = Post.find(id)
		if name != post.user.name
			poster = "#{name} as #{post.user.name}"
		else
			poster = "#{name}"
		end
		mssg = "Post: #{post.name} by #{poster} - #{ENV['ROOT_PATH']}posts/#{post.pretty_slug}"
	elsif role == "Comment"
		comment = Comment.find(id)
		if name != comment.user.name
			poster = "#{name} as #{comment.user.name}"
		else
			poster = "#{name}"
		end
		mssg = "Comment: #{poster} commented on #{comment.post.name} - #{ENV['ROOT_PATH']}posts/#{comment.post.pretty_slug}"
	elsif role == "Image"
		image = Image.find(id)
		if name != image.user.name
			poster = "#{name} as #{image.user.name}"
		else
			poster = "#{name}"
		end
		mssg = "Image: For #{image.product.name} by #{poster} - #{ENV['ROOT_PATH']}products/#{image.product.pretty_slug}"
	elsif role == "Campaign"
		mssg = "Campaign: #{id} - #{name}: QR code scanned!"
	end
	HTTParty.post("#{ENV['SLACK_CALLBACK_PATH']}",
  {:body => { "text" => "#{mssg}" }.to_json, :headers => { 'Content-Type' => 'application/json', 'Accept' => 'application/json'}})
  end
end