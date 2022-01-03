class AddEmailSettingsToUsers < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :unread_notifications_batch_emails, :boolean, default: true
  	add_column :users, :featured_batch_emails, :boolean, default: true
  	add_column :users, :subscribed, :boolean, default: true
  	add_column :users, :email_settings, :text
  end
end