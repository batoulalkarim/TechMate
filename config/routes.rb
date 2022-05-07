Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :matches, only: [:index, :show, :create, :show_pending_requests, :show_requests_to_me, :show_accepted_matches, :update]

  resources :matches, only: [:show, :index, :create, :show_pending_requests, :update] do 
    resources :users, only: [:show, :index]
  end 


  put "/matches", to: "matches#update"
  post "/login", to: "sessions#show"
  post "/users", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  patch "/users/likes/:id", to: "users#update_likes"
  get "/me", to: "users#me"
  post "/matches", to: "matches#create"
  get "/matches/accepted/:user_id", to: "matches#show_accepted_matches"
  get "/matches/user/:user_id", to: "matches#show_pending_requests"
  get "/matches/currentuser/:user_id", to: "matches#show_requests_to_me"
  post "/users/:id", to: "users#update"
  patch "/users/:id", to: "users#update"
  delete "/users/:id", to: "users#destroy"
  post "/users/:id/requestors", to: "users#requestors"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
