class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    skip_before_action :authorized, only: [:index, :create, :show, :update, :update_likes, :destroy]


    def index 
        user = User.all
        render json: user
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def show 
        user = User.find_by(id: params[:id])
        render json: user
    end

    def me
        current_user = User.find(session[:user_id])
        render json: current_user 
    end

    def update 
        user = User.find_by(id: params[:id])
        puts user
        if user
            user.update!(user_params)
            render json: user
        else 
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy 
        user = User.find_by!(id: params[:id])
        if user 
            user.destroy 
            head :no_content
        else 
            render json: {error: "User not found"}, status: :not_found 
        end
    end


    def update_likes 
        user = User.find_by(id: params[:id])
        if user 
            #add selected user id to likes array 
        else 
            render json: {error: "User not found"}, status: :not_found 
        end 
    end

    private 

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity 
    end

    def update_params 
        params.permit(:job, :birthdate, :age, :location, :bio, :interested_in)
    end

    def user_params
        params.permit(:profilepic, :username, :password, :name, :email, :id, :job, :birthdate, :location, :age, :bio, :interested_in)
    end
    
    def selected_user_params 
        params.permit(:id, :selectedUserId)
    end

end
