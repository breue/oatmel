class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :role
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :image_url
      t.integer :karma, default: 1, null: false
      t.integer :post_count, default: 0, null: false
      t.integer :unread_notifications, default: 0, null: false
      t.string :token
      t.string :slug
      t.string :pretty_slug
      t.string :google_id
      t.boolean :verified, default: false, null: false
      t.boolean :onboarded, default: false
      t.timestamps
    end
  end
end