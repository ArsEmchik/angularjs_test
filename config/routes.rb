Rails.application.routes.draw do
  resources :questions, :defaults => {format: :json} do
    resources :comments, :defaults => {format: :json}
  end

  root to: 'application#index'
end
