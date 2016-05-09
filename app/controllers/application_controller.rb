class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :set_locale
  after_filter :store_previous_query

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options(options = {})
      { locale: I18n.locale }.merge options
  end

  def store_previous_query
    if request.path.include? "/doctors"
      # TODO: This will return nil for "/doctors" with no query.
      #       Is that the desired behaviour? Would "" be better?
      session[:previous_query] = request.query_parameters[:q]
    else
      session[:previous_query] = nil
    end
  end
end
