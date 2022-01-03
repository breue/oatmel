module ApplicationHelper
	include Pagy::Frontend
	def google_auth_button(text = nil, proceed_to:, **options, &block)
		form_with url: google_sign_in.authorization_path, local: true do
		  hidden_field_tag(:proceed_to, proceed_to, id: nil) + 
		  button_tag(type: "submit", style: "background:none;border:none;") do
			'<div class="row">
				<div class="col-xs-3">
					<a class="btn btn-outline-dark" onclick="this.parentNode.submit(); return false;" role="button" style="text-transform:none">
						<img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="/g_icon.png" />
						Login with Google
					</a>
				</div>
			</div>'.html_safe
		  end
		end
	end
	def badge(user, size)
	  if user.verified
	  	if size == "small"
	  		data = "&nbsp;<img src='/verified.svg' style='width:19px;height:19px'>"
	  	else
	  		data = "&nbsp;<img src='/verified.svg' style='width:30px;height:30px'>"
	  	end
	  else
	  	data = ""
	  end 
	  data.html_safe
	end
end