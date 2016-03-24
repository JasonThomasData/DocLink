require 'rails_helper'

feature "User finds a doctor" do
  scenario "successfully" do
    VCR.use_cassette('doclink') do
      close_doctor = create(
        :doctor,
        name: "Doctor Jason",
        phone_number: "95169889",
        address: "300 King St, Newtown, NSW"
      )

      far_doctor = create(
        :doctor,
        name: "Doctor Fatima",
        phone_number: "0406563694",
        address: "7 Park Ave, Blackheath, NSw"
      )

      visit search_doctors_path
      fill_in "What’s your location", with: "10 King st, Newtown NSW"
      click_button "Search"

      expect(page).to have_content close_doctor.name
      expect(page).to have_content close_doctor.phone_number
      expect(page).to have_content "300 King St, Newtown"
      expect(page).to have_content "865 m"
      expect(page).to_not have_content far_doctor.name
      expect(page).to_not have_content far_doctor.phone_number
    end
  end
end
