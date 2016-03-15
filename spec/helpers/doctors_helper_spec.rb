require 'rails_helper'

describe DoctorsHelper do
  describe "#distance_in_words" do
    it { expect(helper.distance_in_words(2)).to eq "2 km away" }
    it { expect(helper.distance_in_words(3)).to eq "3 km away" }
    it { expect(helper.distance_in_words(3.4)).to eq "3.4 km away" }
    it { expect(helper.distance_in_words(0.5)).to eq "500 m away" }
    it { expect(helper.distance_in_words(0.02)).to eq "20 m away" }
  end
end

