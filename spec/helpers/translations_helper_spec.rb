require "rails_helper"

describe TranslationsHelper do
  describe "#previous_path_with_locale" do
    it { expect(helper.previous_path_with_locale(nil, nil)).to eq "/" }
    it { expect(helper.previous_path_with_locale("/about", nil)).to eq "/about" }
    it {
      expect(helper.previous_path_with_locale("/doctors?q=Belmore", nil))
        .to eq "/doctors?q=Belmore"
    }

    context "when the previous path includes a locale" do
      it "keeps it in place" do
        expect(helper.previous_path_with_locale("/en/about", nil))
        .to eq "/en/about"
      end
    end

    context "and there is a locale" do
      it { expect(helper.previous_path_with_locale(nil, :ar)).to eq "/ar/" }
      it { expect(helper.previous_path_with_locale("/about", :ar)).to eq "/ar/about" }
      it {
        expect(helper.previous_path_with_locale("/doctors?q=Belmore", :ar))
          .to eq "/ar/doctors?q=Belmore"
      }

      context "when the previous path includes a locale" do
        it "replaces it with the specified local" do
          expect(helper.previous_path_with_locale("/en/about", :ar))
          .to eq "/ar/about"
        end
      end
    end
  end
end
