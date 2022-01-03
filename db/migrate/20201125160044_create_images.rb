class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :role
      t.integer :product_id
      t.integer :user_id
      t.string :slug
      t.timestamps
    end
  end
end