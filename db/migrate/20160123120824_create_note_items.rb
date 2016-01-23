class CreateNoteItems < ActiveRecord::Migration
  def change
    create_table :note_items do |t|
      t.integer :note_id
      t.text :text
      t.timestamps
    end
  end
end
