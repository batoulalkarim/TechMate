class MessagesController < ApplicationController
skip_before_action :authorized, only: [:create]


def create 
    message = Message.create(messages_params)
    if message.valid?
        render json: message, status: :created 
    else 
        render json: { errors: message.errors.full_messages}, status: :unprocessable_entity
end


private 

def messages_params
    params.require(:message).permit([:requestor_id, :receiver_id, :content])
end

end
