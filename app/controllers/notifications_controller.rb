class NotificationsController < ApplicationController
	def notifications
		if params[:view]
			@user = User.find_by_slug(params[:view])
			@notifications = @user.notifications.order("created_at DESC").paginate(:page => params[:page], :per_page => 7)
			@user.unread_notifications = 0
		    @user.save
		else
			@notifications = @current_user.notifications.order("created_at DESC").paginate(:page => params[:page], :per_page => 7)
			@current_user.unread_notifications = 0
		@current_user.save
		end
	end
	def notification_settings
		@user = User.find_by_slug(params[:slug])
	end
	def update_notification_settings
		@user = User.find_by_slug(params[:slug])
		if params[:role] == "notifications"
			@user.unread_notifications_batch_emails = params[:value]
		elsif params[:role] == "featured"
			@user.featured_batch_emails = params[:value]
		end
		@user.save
		render json: {status: "success"}
	end
end