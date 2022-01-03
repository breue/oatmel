class AddImageKeys < ActiveRecord::Migration[5.2]
  def change
  	add_column :products, :img_front_key, :string
  	add_column :products, :img_back_key, :string
  	add_column :products, :img_extra_key, :string
  	add_column :images, :img_key, :string
  	add_column :users, :img_key, :string
  end
end