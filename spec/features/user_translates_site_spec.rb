require 'rails_helper'

feature "User translates site" do
  scenario "successfully" do
    visit root_path

    expect(page).to have_content "Find doctors near you"

    click_link "Translate this site"
    click_link "العربية"

    expect(page).to have_content "البحث عن الأطباء بالقرب منك"
  end

  scenario "successfully from search results page" do
    VCR.use_cassette('doclink') do
      create(:doctor, name: "Doctor Jason",
                      address: "300 King St, Newtown, NSW")

      visit doctors_path(q: "Newtown NSW")

      expect(page).to have_content "We found 1 doctor near Newtown NSW:"

      click_link "Translate this site"
      click_link "العربية"

      expect(page).to have_content "وجدنا 1 طبيب بالقرب Newtown NSW:"
    end
  end
end
