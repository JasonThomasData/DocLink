require 'rails_helper'

feature "User finds a doctor" do
  scenario "successfully" do
    create(:doctor, name: "Doctor Jason", phone_number: "95169889")

    visit search_doctors_path
    fill_in "Find doctors near by", with: "Newtown NSW"
    click_button "Search"

    expect(page).to have_content "Doctor Jason"
    expect(page).to have_content "95169889"
  end
end
