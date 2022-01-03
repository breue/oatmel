class ChangeImageRoleDefault < ActiveRecord::Migration[5.2]
  def up
  	change_column :images, :role, :string, default: "Approved"
  end
  def down
  end
end