class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string :category, :status, null: false, limit: 10
      t.text :user_description
      t.text :support_description
      t.belongs_to :user, foreign_key: true, null: false
      t.integer :support_user_id, null: false

      t.timestamps
    end
    add_foreign_key :tickets, :users, column: :support_user_id
  end
end
