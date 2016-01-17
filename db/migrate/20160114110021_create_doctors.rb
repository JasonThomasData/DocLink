class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.text   :address,       null: false
      t.string :name,          null: false
      t.string :phone_number

      t.timestamps             null: false
    end
  end
end
