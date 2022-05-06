class Match < ApplicationRecord
    belongs_to :requestor, class_name: "User"
    belongs_to :receiver, class_name: "User"

    accepts_nested_attributes_for :requestor, :receiver
end
