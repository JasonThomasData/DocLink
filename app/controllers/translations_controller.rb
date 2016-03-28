class TranslationsController < ApplicationController
  def index
    @previous_query = session[:previous_query]
  end
end
