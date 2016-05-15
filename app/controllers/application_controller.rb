class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :set_locale
  after_filter :store_previous_path

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options(options = {})
      { locale: I18n.locale }.merge options
  end

  def store_previous_path
    session[:previous_path] = request.fullpath
  end
end
