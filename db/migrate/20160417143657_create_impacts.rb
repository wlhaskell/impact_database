class CreateImpacts < ActiveRecord::Migration
  def change
    create_table :impacts do |t|
      t.string :name
      t.string :country
      t.string :continent
      t.float :lat
      t.float :lon
      t.float :diameter
      t.string :age
      t.string :exposed
      t.string :drilled
      t.string :target_rock
      t.string :bolide_type
      t.string :image

      t.timestamps null: false
    end
  end
end
