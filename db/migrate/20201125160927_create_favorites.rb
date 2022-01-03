class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :product_id
      t.integer :user_id
      t.integer :category_id
      t.string :slug
      t.timestamps
    end
  end
end