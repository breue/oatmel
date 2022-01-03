class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.integer :user_id
      t.text :blob
      t.boolean :seen, default: false, null: false
      t.string :slug
      t.timestamps
    end
  end
end