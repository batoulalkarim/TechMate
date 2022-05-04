class User < ApplicationRecord
    has_many :receivers, foreign_key: :receiver_id, class_name: "Match"
    has_many :requestors, through: :receivers 
    
    has_many :requestors, foreign_key: :requestor_id, class_name: "Match"
    has_many :receivers, through: :requestors 

    has_secure_password
  
end
