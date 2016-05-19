class TranslationsController < ApplicationController
  def index
    @previous_path = session[:previous_path]
  end
end
