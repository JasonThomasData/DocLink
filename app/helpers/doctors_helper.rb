module DoctorsHelper
  def distance_with_unit(km)
    if km >= 1
      distance = km.round(1).to_s.sub(".0", "")
      distance + " km"
    elsif km < 1
      meters = km * 1000
      distance = meters.floor.to_s
      distance + " m"
    end
  end

  def display_address(address)
    address.sub(/, Australia$/,"").sub(/, NSW/,"")
  end

  def format_address_for_google(address)
    address.gsub("/", ",").gsub(" ", "+")
    #Google splits strings into params with '/' as delimeter, so we need to remove those.
    #Google likes to receive addresses with '+' insted of ' '.
  end

  def map_link(address)
    address_to_geocode = format_address_for_google(address)
    link_to t("map_link.text"),
            "https://www.google.com.au/maps/place/#{address_to_geocode}/",
            title: t("map_link.title"),
            class: "doctor-link-map"
  end
end