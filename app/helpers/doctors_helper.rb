module DoctorsHelper
  def distance_in_words(km)
    if km >= 1
      distance = km.round(1).to_s.sub(".0", "")
      distance += " km"
    elsif km < 1
      meters = km * 1000
      distance = meters.floor.to_s
      distance += " m"
    end

    distance + " away"
  end
end
