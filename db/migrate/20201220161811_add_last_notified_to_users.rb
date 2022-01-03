class AddLastNotifiedToUsers < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :last_notified_at, :datetime
  end
end