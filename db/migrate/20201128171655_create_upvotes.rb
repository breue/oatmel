class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.string :role
      t.integer :user_id
      t.integer :post_id
      t.integer :comment_id
      t.integer :score, default: 1, null: false
      t.string :slug
      t.timestamps
    end
  end
end