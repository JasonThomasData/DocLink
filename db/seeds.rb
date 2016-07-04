# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

Doctor.create!(
  name: "Dr. Mariam Doreen Joseph",
  address: "316 N Liverpool Rd Green Valley NSW 2168",
  phone_number: "02 9826 7774"
)

Doctor.create!(
  name: "Dr. Karam Jirjis",
  service_name: "All Care Mediclinic",
  address: "7 Barbara Street Fairfield NSW 2165",
  phone_number: "02 9723 9000"
)

Doctor.create!(
  name: "Dr. Zaha Kalid",
  service_name: "Liverpool Doctors Medical Centre",
  address: "147 Northunberland Street Liverpool NSW 2170",
  phone_number: "02 8798 0253"
)

Doctor.create!(
  name: "Dr. Husam Al Kurdi",
  service_name: "Liverpool Health Care medical Centre",
  address: "2/236 Macquarie Street Liverpool NSW 2170",
  phone_number: "02 9602 8292"
)

Doctor.create!(
  name: "Dr. Johan Atto",
  address: "30 Ware Street Fairfield NSW 2165",
  phone_number: "02 9726 1183"
)
