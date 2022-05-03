class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :location, :profilepic, :bio, :age, :interested_in, :list_of_matches, :images, :list_of_messages
end
