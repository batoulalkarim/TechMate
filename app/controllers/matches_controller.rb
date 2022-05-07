class MatchesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :show_pending_requests, :show_requests_to_me, :show_accepted_matches, :create]
    
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

    def update 
        match = Match.where(receiver_id: params[:user_id], status: status, likes: true)
        puts match 
        render json: match
    end

    def show 
        match = Match.find_by(id: params[:id])
        render json: match
    end

    def show_accepted_matches
        match = Match.where(requestor_id: params[:user_id], status: "approved")
        puts match
        render json: match 
    end

    def show_pending_requests
        matches = Match.where(requestor_id: params[:user_id], status: 'pending', likes: true)
        puts matches
        render json: matches, include: :receivers
    end

    def show_requests_to_me
        matches = Match.where(receiver_id: params[:user_id], status: 'pending', likes: true)
        puts matches 
        render json: matches, include: :requestors
    end

    private 

    def matches_params
        params.permit(:requestor_id, :receiver_id, :status, :likes)
    end
end
