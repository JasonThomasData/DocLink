module TranslationsHelper
  def previous_path_with_locale(previous_query = nil, locale = nil)
    if previous_query.present?
      doctors_path(locale: locale, q: previous_query)
    else
      root_path(locale: locale)
    end
  end
end
