class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :birthdate, :job, :location, :profilepic, :bio, :age, :interested_in

end
