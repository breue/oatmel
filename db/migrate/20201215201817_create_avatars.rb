class CreateAvatars < ActiveRecord::Migration[5.2]
  def change
    create_table :avatars do |t|
      t.string :role
      t.string :img_key
      t.string :slug
      t.timestamps
    end
  end
end