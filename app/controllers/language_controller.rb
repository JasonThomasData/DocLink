class LanguageController < ApplicationController
  def change
    @previous_query = session[:previous_query]
  end
end
