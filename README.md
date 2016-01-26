# DocLink
Map for refugees to see what doctors are available

## Rails

This is a Ruby on Rails version of the [original prototype](https://github.com/JasonThomasData/DocLink/tree/647fcda5701d444ce19b5a1bf916492d0fafbfdc).

## Translations

Translations are handled by the [FastGetText gem](https://github.com/grosser/fast_gettext).
The translations for each language are stored in .po files in the locales directory.
Use the GetText rake tasks to add new languages and to translate Strings.

Add a new language using `bundle exec rake gettext:add_language[xx]`
(see example commit 891f810).

Follow the instructions in [the GetText readme](https://github.com/grosser/fast_gettext#4-start-translating)
to add new String translations.
