class CreateFeedbacks < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.integer :user_id
      t.integer :review_id
      t.integer :product_id
      t.integer :score, default: 0, null: false
      t.string :slug
      t.timestamps
    end
  end
end