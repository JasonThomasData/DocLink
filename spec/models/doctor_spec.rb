require 'spec_helper'

describe Doctor do
  it "is geocoded" do
    doctor = VCR.use_cassette('doclink') do
      create(
        :doctor,
        name: "Doctor Jason",
        phone_number: "95169889",
        address: "300 King St, Newtown, NSW"
      )
    end

    expect(doctor.longitude).to eq 151.1795791
    expect(doctor.latitude).to eq -33.8967543
  end
end
