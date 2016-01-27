require 'rails_helper'

feature "User changes language" do
  scenario "successfully" do
    visit root_path

    expect(page).to have_content "Find doctors near by"

    click_link "Change language"
    click_link "العربية"

    expect(page).to have_content "ايجاد الاطباء"
  end
end
