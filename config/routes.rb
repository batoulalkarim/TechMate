Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :matches, only: [:index, :show, :create]

  resources :matches, only: [:show, :index, :create] do 
    resources :users, only: [:show, :index]
  end 


  post "/login", to: "sessions#show"
  post "/users", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#me"
  post "/matches", to: "matches#create"
  post "/users/:id", to: "users#update"
  patch "/users/:id", to: "users#update"
  delete "/users/:id", to: "users#destroy"
  post "/users/:id/requestors", to: "users#requestors"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
