class MessagesController < ApplicationController
skip_before_action :authorized, only: [:create, :index, :show]


def create 
    message = Message.create(messages_params)
    if message.valid?
        render json: message, status: :created 
    else 
        render json: { errors: message.errors.full_messages}, status: :unprocessable_entity
end
end

def index 
    messages = Message.all
    render json: messages 
end

def show
        messages = Message.where(receiver_id: params[:id]).or(Message.where(requestor_id: params[:id]))
        render :json => messages.to_json(:include => [:requestor, :receiver])
end




private 

def messages_params
    params.require(:message).permit([:requestor_id, :receiver_id, :content])
end

end
