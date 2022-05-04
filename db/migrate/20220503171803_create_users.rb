class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :job
      t.datetime :birthdate
      t.string :location
      t.string :profilepic
      t.string :bio
      t.integer :age
      t.string :interested_in
      t.string :list_of_matches
      t.string :images
      t.string :list_of_messages

  
    end
  end
end
