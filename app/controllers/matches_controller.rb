class MatchesController < ApplicationController
    skip_before_action :authorized, only: [:acceptedmatch, :destroy, :index, :show, :show_pending_requests, :show_requests_to_me, :show_accepted_matches, :create]
    
    def index 
        matches = Match.all
        render :json => matches.to_json(:include => [:requestor, :receiver]) 
    end

    def create 
        match = Match.create(matches_params)
        if match.valid?
            render json: match, status: :created
        else 
            render json: { errors: match.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def destroy
        match= Match.find_by(id: params[:id])
        if match 
            match.destroy
            head :no_content
        else
            render json: { error: "Match not found"}, status: :not_found
        end
    end


    def update 
        # match = Match.where(receiver_id: params[:id], status: "pending", likes: true)
        # render json: match
        # puts matches_params
        match = Match.find_by(id: params[:id])
        puts match
        if match 
        match.update(matches_params)
        render json: match
        else  
            render json: {error: "Match not found"}, status: :not_found
        end
    end

    def show 
        match = Match.find_by(id: params[:id])
        render json: match
    end

    def show_accepted_matches
        matches = Match.where(requestor_id: params[:user_id], status: "accepted").or(Match.where(receiver_id: params[:user_id], status: "accepted"))
        render :json => matches.to_json(:include => [:requestor, :receiver]) 
    end

    def acceptedmatch 
        matches = Match.where(requestor_id: params[:user_id], status: "accepted")
        render :json => matches.to_json(:include => [:requestor, :receiver]) 
    end


    def show_pending_requests
        matches = Match.where(requestor_id: params[:user_id], status: 'pending', likes: true)
        render :json => matches.to_json(:include => [:receiver, :requestor]) 
    end



    def show_requests_to_me
        matches = Match.where(receiver_id: params[:user_id], status: 'pending', likes: true)
        puts matches 
        render :json => matches.to_json(:include => :requestor)
    end

    private 

    def matches_params
        params.require(:match).permit([:requestor_id, :receiver_id, :status, :likes])
        # params.permit(:requestor_id, :receiver_id, :status, :likes)
    end
end
