Rails.application.routes.draw do
  scope "(:locale)" do
    resources :doctors, only: [:index] do
      collection do
        get :search
      end
    end

    get "language", to: "language#change"
  end

  get ":locale" => "doctors#search"
  root to: "doctors#search"
end
