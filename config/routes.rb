Rails.application.routes.draw do
	resources :products, param: :slug
	resources :reviews, param: :slug
	resources :posts, param: :slug
	resources :comments, param: :slug
	resources :images, param: :slug
	get 'product' => 'products#product'
	get 'community' => 'posts#community'
	get 'post' => 'posts#post'
	get 'profiles/*slug' => 'profiles#show'
	post 'select_avatar/*slug' => 'profiles#select_avatar'
	post 'remove_avatar' => 'profiles#remove_avatar'
	get 'login', to: 'logins#new'
	get 'login/create', to: 'logins#create', as: :create_login
	put 'logout' => 'logins#logout'
	put 'settings' => 'logins#settings'
	get 'notifications' => 'notifications#notifications'
	get 'scan_products' => 'products#scan_products', :defaults => { :format => 'json' }
	post 'add_review/*slug' => 'reviews#add_review', :defaults => { :format => 'json' }
	post 'rate_review/*review/*score' => 'feedback#rate_review', :defaults => { :format => 'json' }
	post 'favorite/*product' => 'favorites#favorite', :defaults => { :format => 'json' }
	post 'unfavorite/*product' => 'favorites#unfavorite', :defaults => { :format => 'json' }
	post 'add_comment/*post' => 'comments#add_comment', :defaults => { :format => 'json' }
	post 'reply_comment/*replying_to' => 'comments#reply_comment', :defaults => { :format => 'json' }
	post 'upvote/*object' => 'upvotes#upvote', :defaults => { :format => 'json' }
	post 'unvote/*object' => 'upvotes#unvote', :defaults => { :format => 'json' }
	post 'upload' => 'images#upload', :defaults => { :format => 'json' }
	post 'hide' => 'admin#hide'
	post 'scramble' => 'admin#scramble', :defaults => { :format => 'json' }
	post 'feature' => 'admin#feature'
	post 'promote' => 'admin#promote'
	get 'authy' => 'admin#authy'
    put 'unlock' => 'admin#unlock'
    get 'export' => 'admin#export'
    get 'notification_settings/*slug' => 'notifications#notification_settings'
    post 'update_notification_settings/*slug' => 'notifications#update_notification_settings'
    post 'broadcast' => 'admin#broadcast'
    namespace :marketing do
		get 'instacart' => 'campaigns#instacart'
	end
    get 'about' => 'pages#about'
    get 'stats' => 'admin#stats'
	root 'pages#index'
end