module ApplicationHelper
  def direction_for_locale(locale)
    rtl_languages = [:ar]
    rtl_languages.include?(locale) ? "rtl" : "ltr"
  end
end
