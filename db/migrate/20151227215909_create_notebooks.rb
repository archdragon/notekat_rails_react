class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.integer :account_id
      t.string :name
    end

    add_index :notebooks, :account_id, :name => 'account_id_ix'
  end
end
