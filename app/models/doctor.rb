class Doctor < ActiveRecord::Base
:A
  geocoded_by :address
  after_validation :geocode
end
