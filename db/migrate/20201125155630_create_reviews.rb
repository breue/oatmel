class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :role, default: "Approved", null: false
      t.integer :user_id
      t.integer :product_id
      t.text :description
      t.integer :rating, default: 1, null: false
      t.integer :helpful_count, default: 0, null: false
      t.string :slug
      t.timestamps
    end
  end
end