class CreateBroadcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :broadcasts do |t|
      t.string :role
      t.integer :recipients_size
      t.string :slug
      t.timestamps
    end
  end
end