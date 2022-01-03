class Notifier
  include Sidekiq::Worker
  def perform(role, id)
  	3.times{p "Notifying event"}
	if role == "User"
	elsif role == "Product"
	elsif role == "Review"
	elsif role == "Post"
	elsif role == "Comment"
	end
  end
end
#Eventually push the notification create method here