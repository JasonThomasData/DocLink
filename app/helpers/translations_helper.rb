module TranslationsHelper
  def previous_path_with_locale(previous_path = nil, locale = nil)
    path = previous_path ? previous_path : "/"

    if locale
      path = strip_locale_from_path(path)
      path.prepend("/" + locale.to_s)
    end

    path
  end

  def strip_locale_from_path(path)
    available_locales = I18n.available_locales.map { |l| l.to_s }

    chunks = path.split("/").drop_while { |c| c.blank? }

    available_locales.each do |locale|
      chunks = chunks.drop(1) if chunks.first.eql? locale
    end

    chunks.join("/").prepend("/")
  end
end
