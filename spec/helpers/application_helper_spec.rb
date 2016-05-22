require 'rails_helper'

describe ApplicationHelper do
  describe "#direction_for_locale" do
    it { expect(direction_for_locale(:en)).to eql "ltr" }
    it { expect(direction_for_locale(:ar)).to eql "rtl" }
    it { expect(direction_for_locale(:xx)).to eql "ltr" }
  end
end
