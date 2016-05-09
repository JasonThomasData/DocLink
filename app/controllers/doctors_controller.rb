class DoctorsController < ApplicationController
  def index
    @q = params[:q]

    if @q
      # TODO: Set this distance to something useful to people
      @doctors = Doctor.near(@q, 4)
    else
      @doctors = Doctor.all
    end
  end

  def search

  end
end
