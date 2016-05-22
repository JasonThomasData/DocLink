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

  def remove_slash_from_address(address)
    return address.gsub("/", ",")
  end

  def remove_space_from_address(address_no_slash)
    return address_no_slash.gsub(" ", "+")
  end

  def map_link(address)
    address_no_slash = remove_slash_from_address(address)
    address_no_spaces = remove_space_from_address(address_no_slash)

    link_to t("map_link.text"),
            "https://www.google.com.au/maps/place/#{address_no_spaces}/",
            title: t("map_link.title"),
            class: "doctor-link-map"
  end
end