class MatchSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id, :status
end
