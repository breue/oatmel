class ChangeUserDefaultRole < ActiveRecord::Migration[5.2]
  def up
  	change_column :users, :role, :string, default: "User"
  end
  def down
  end
end