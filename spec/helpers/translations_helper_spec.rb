require "rails_helper"

describe TranslationsHelper do
  describe "#previous_path_with_locale" do
    context "when there is a previous query" do
      it "is the path for that doctor search" do
        expect(helper.previous_path_with_locale("Belmore", nil)).
          to eq "/doctors?q=Belmore"
      end

      context "and there is a locale" do
        it "is the path for that doctor search with that locale" do
          expect(helper.previous_path_with_locale("Belmore", :ar)).
            to eq "/ar/doctors?q=Belmore"
        end
      end
    end

    context "when there isn’t a previous query" do
      it "is the root path" do
        expect(helper.previous_path_with_locale(nil, nil)).to eq "/"
      end

      context "and there is a locale" do
        it "is the root path with that locale" do
          expect(helper.previous_path_with_locale(nil, :ar)).to eq "/ar"
        end
      end
    end
  end
end
