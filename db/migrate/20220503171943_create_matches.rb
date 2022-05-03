class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :requestor_id, foreign_key: true 
      t.integer :receiver_id, foreign_key: true 
      t.string :status 
   
    end
  end
end
