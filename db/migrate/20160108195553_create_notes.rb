class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :notebook_id
      t.timestamps
    end

    add_index :notes, :notebook_id, :name => 'notebook_id_ix'
  end
end
