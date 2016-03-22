require 'rails_helper'

describe DoctorsHelper do
  describe "#distance_with_unit" do
    it { expect(helper.distance_with_unit(2)).to eq "2 km" }
    it { expect(helper.distance_with_unit(3)).to eq "3 km" }
    it { expect(helper.distance_with_unit(3.4)).to eq "3.4 km" }
    it { expect(helper.distance_with_unit(0.5)).to eq "500 m" }
    it { expect(helper.distance_with_unit(0.02)).to eq "20 m" }
  end
end

