Rails.application.routes.draw do
  resources :doctors, only: [:index] do
    collection do
      get :search
    end
  end

  root to: "doctors#search"
end
