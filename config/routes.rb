Rails.application.routes.draw do
  root to: 'application#index'

  resources :questions, :defaults => {format: :json} do
    resources :comments, :defaults => {format: :json}
  end
end
