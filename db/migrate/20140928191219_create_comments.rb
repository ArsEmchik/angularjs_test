class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :name
      t.text :answer
      t.references :question
      t.timestamps
    end
  end
end
