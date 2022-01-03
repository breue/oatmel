class LoginsController < ApplicationController
	def new
	end
	def create
		if id_token = flash[:google_sign_in]["id_token"]
			p identity = GoogleSignIn::Identity.new(id_token)
			user = User.find_or_create_by(google_id: identity.user_id)
			user.auth(identity)
			cookies.permanent.encrypted[:oat_token] = {:value => user.token, :httponly => true, :secure => Rails.env.production?}
			redirect_to "/", notice: "Yay-Sucessfully signed in!"
		elsif error = flash[:google_sign_in][:error]
			p "Google authentication error: #{error}"
			redirect_to "/", notice: "Oops-Please check your google account."
		end
	end
	def logout
		if @user = User.where(token: cookies.encrypted[:oat_token]).first
			# @user.tokenize
			#Took this out for now, so that users are not logged out of all devices
		end
		cookies.permanent.encrypted[:oat_token] = {:value => nil, :httponly => true, :secure => Rails.env.production?}
		redirect_to "/", notice: "Successfully logged out!"
	end
	def settings
		if @user = User.where(token: cookies.encrypted[:oat_token]).first
			@user.first_name = params[:first_name]
		    @user.last_name = params[:last_name]
			@user.email = "#{params[:email]}".gsub(" ", "")
		    @user.save!
		    @user.tokenize
		    cookies.permanent.encrypted[:oat_token] = {:value => @user.token, :httponly => true, :secure => Rails.env.production?}
		end
		redirect_to "/"
	end
end