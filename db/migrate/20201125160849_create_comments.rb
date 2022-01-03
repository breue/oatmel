class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :role, default: "Approved", null: false
      t.integer :post_id
      t.integer :user_id
      t.integer :parent_id
      t.text :description
      t.integer :upvote_count, default: 1, null: false
      t.string :slug
      t.timestamps
    end
  end
end