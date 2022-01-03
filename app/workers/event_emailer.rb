class EventEmailer
  include Sidekiq::Worker
  def perform(role, id)
  	3.times{p "Sending email for event"}
	if role == "Verified"
		p "Sending verified email"
		user = User.find(id)
		p UserMailer.verified_email(user).deliver_now
	elsif role == "Notifications"
		user = User.find(id)
		if user.last_notified_at.nil?
			p UserMailer.unread_notifications(user).deliver_now
			user.update(last_notified_at: Time.now)
			3.times{p "Actually sending out"}
		elsif user.last_notified_at < (Time.now - 3.days)
			p UserMailer.unread_notifications(user).deliver_now
			user.update(last_notified_at: Time.now)
			3.times{p "Actually sending out"}
		end
		#Added double scanning logic here, just in case there are multiple redundant items fired in the queue
	end
  end
end
#Eventually push the notification create method here