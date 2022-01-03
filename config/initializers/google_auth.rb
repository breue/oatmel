# config/initializers/google_sign_in.rb
Rails.application.configure do
  config.google_sign_in.client_id     = ENV["GOOGLE_SIGN_IN_CLIENT_ID"]
  config.google_sign_in.client_secret = ENV["GOOGLE_SIGN_IN_CLIENT_SECRET"]
  config.google_sign_in.root = ENV["GOOGLE_SIGN_IN_PATH"]
end