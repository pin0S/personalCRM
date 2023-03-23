class ContactTableNotNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:contacts, :name, true)
    change_column_null(:contacts, :email, true)
  end
end
