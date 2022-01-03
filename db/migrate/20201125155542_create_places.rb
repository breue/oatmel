class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name
      t.string :slug
      t.string :pretty_slug
      t.timestamps
    end
  end
end