class UserMailer < ApplicationMailer
	def verified_email(user)
		@user = user
		mail(to: @user.email, subject: "You're now a verified user on Oatmel")
	end
	def unread_notifications(user)
		@user = user
		mail(to: @user.email, subject: "You have some new activity on Oatmel")
	end
	def weekly_featured(user, product)
		@user = user
		@product = product
		mail(to: @user.email, subject: "Product of the week on Oatmel")
	end
end