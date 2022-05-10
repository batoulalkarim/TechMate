class MessageSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id, :content
end
