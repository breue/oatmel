class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :role, default: "Approved", null: false
      t.string :name
      t.string :place_name
      t.integer :place_id
      t.integer :category_id
      t.string :category_name
      t.decimal :average_rating, default: 0.0, null: false
      t.integer :rating_count, default: 0, null: false
      t.datetime :picked_at
      t.boolean :pick_of_the_week, default: false, null: false
      t.integer :view_count, default: 0, null: false
      t.string :slug
      t.string :pretty_slug
      t.timestamps
    end
  end
end
#has attached image - this is the primary image file - it's just a dupe of one of the Images of the product, but just the primary one so it loads way faster