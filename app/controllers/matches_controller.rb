class MatchesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :show_pending_requests, :create]
    
    def index 
        match = Match.all
        render json: match # , include: [:requestor, :receiver] 
    end

    def create 
        match = Match.create(matches_params)
        if match.valid?
            render json: match, status: :created
        else 
            render json: { errors: match.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def show 
        match = Match.find_by(id: params[:id])
        render json: match
    end

    def show_pending_requests
        matches = Match.where(requestor_id: params[:user_id], status: 'pending', likes: true)
        puts matches
        render json: matches, include: [:requestor_id, :receiver_id] 
    end


    private 

    def matches_params
        params.permit(:requestor_id, :receiver_id, :status, :likes)
    end
end
