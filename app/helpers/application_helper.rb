module ApplicationHelper 
    
    def match_request_sent?(user)
        current_user.requestors.exists?(receiver_id: user.id, status: false)    
    end


    def match_request_received?(user)
        current_user.receivers.exists?(requestor_id: user.id, status: false)
    end

    #This will check if a user has had a match request sent to them by the current user
    #or if the current user has been sent a friend request by the user returning either true or false

    def possible_match?(user) 
        request_sent = current_user.requestors.exists?(receiver_id: user.id)
        request_received = current_user.receivers.exists?(requestor_id: user.id)

        return true if request_sent != request_received
        return true if request_sent == request_received && request_sent == true
        return false if request_sent == request_received && request_sent == false 
    end

end