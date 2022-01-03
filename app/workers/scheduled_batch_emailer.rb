class ScheduledBatchEmailer
  include Sidekiq::Worker
  def perform(role)
  	10.times{p "Processing scheduled batch emails"}
  	#Users to notify about featured products/posts
    if role == "Featured"
      if Broadcast.where('created_at > ?', Time.now - 1.hours).size == 0
        @product = Product.where(pick_of_the_week: true).first
        @users = User.where(featured_batch_emails: true).where(id: [73])
        Broadcast.create(role: role, recipients_size: @users.size)
        @users.each do |user|
          3.times {p "Sending to the user"}
          p UserMailer.weekly_featured(user, @product).deliver_now
        end
      end
    end
  end
end