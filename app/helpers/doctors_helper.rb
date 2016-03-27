module DoctorsHelper
  def search_results_summary_sentence(query, result_count)
    t("search_results_summary", count: result_count, query: query)
  end

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

  def map_link(address)
    link_to t("map_link.text"),
            "https://www.google.com.au/maps/place/#{address.gsub(" ", "+")}/",
            title: t("map_link.title"),
            class: "doctor-link-map"
  end
end
