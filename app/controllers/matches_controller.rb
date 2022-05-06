class MatchesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create]
    
    def index 
        match = Match.all
        render json: match, include: [:requestor, :receiver] 
    end

    def show 
        match = Match.find_by(id: params[:id])
        render json: match
    end

    def create 
        match = Match.create(matches_params)
        if match.valid? 
            render json: match, status: :created 
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end


    private 

    def matches_params
        params.permit(:requestor_id, :receiver_id, :status)
    end
end
