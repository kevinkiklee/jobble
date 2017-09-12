Rails.application.routes.draw do
  root to: 'pages#root'
  get '/main', to: 'pages#root'
  get '/callback', to: 'pages#root'
end
