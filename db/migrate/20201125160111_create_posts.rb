class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :role, default: "Approved", null: false
      t.integer :user_id
      t.integer :category_id
      t.string :category_name
      t.string :name
      t.text :description
      t.integer :upvote_count, default: 1, null: false
      t.integer :comment_count, default: 0, null: false
      t.datetime :picked_at
      t.boolean :pick_of_the_week, default: false, null: false
      t.text :participants, default: [].to_yaml
      t.integer :view_count, default: 0, null: false
      t.string :slug
      t.string :pretty_slug
      t.timestamps
    end
  end
end