Rails.application.routes.draw do
  scope "(:locale)" do
    resources :doctors, only: [:index] do
      collection do
        get :search
      end
    end

    get "translate", to: "translations#index"
    root to: "doctors#search"
  end
end
