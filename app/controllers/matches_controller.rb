class MatchesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]
    
    def index 
        match = Match.all
        render json: match
    end

    def show 
        match = Match.find_by(id: params[:id])
        render json: match
    end
end
