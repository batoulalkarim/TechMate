class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    skip_before_action :authorized, only: [:create, :show]


    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def show 
        current_user = User.find(session[:user_id])
        render json: current_user 
    end

    private 

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity 
    end

    def user_params
        params.permit(:username, :password, :name, :email)
    end
    
end
