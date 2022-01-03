source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'
gem 'rails', '~> 6.1.0'
gem 'puma', '~> 3.11'

gem 'fuzzy_match', github: 'seamusabshere/fuzzy_match', branch: 'find_all_with_score'
gem 'amatch'
gem "bcrypt"
gem 'simple_form'
gem 'httparty'
gem "aws-sdk-s3", require: false
gem 'will_paginate'
gem 'will_paginate-bootstrap'
gem 'metamagic'
gem 'rails_autolink'
gem 'faker'
gem 'google_sign_in'
gem 'mini_magick', '~>4.9'

gem "pagy", "~> 3.8"

gem 'redis'
gem 'redis-namespace'
gem 'redis-rails'

gem 'sidekiq'
gem "sidekiq-cron", "~> 1.1"

group :development, :test do
  gem 'sqlite3'
end
group :production do
  gem 'pg'
  gem 'rails_12factor'
end
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'bootsnap', '>= 1.1.0', require: false
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]