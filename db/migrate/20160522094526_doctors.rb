class Doctors < ActiveRecord::Migration
  def change
    change_table :doctors do |t|
      t.text   :service_name
    end
  end
end