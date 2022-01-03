class AddImgRatioToProducts < ActiveRecord::Migration[5.2]
  def change
  	add_column :products, :img_ratio, :decimal, default: 0.0, null: false
  end
end