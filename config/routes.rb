Rails.application.routes.draw do
  resources :tickets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentications#authenticate'
  post 'validate', to: 'authentications#validate'
end
