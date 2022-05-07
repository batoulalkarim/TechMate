import React from 'react';
import { useState, useEffect } from 'react'

function RequestsToMe({ currentUser, declineUser, approveUser }) {
    const [requestsToMe, setRequestsToMe] = useState([])

    useEffect(() => {
        currentUser && 
        fetch(`/matches/currentuser/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRequestsToMe(data)
        })
    }, [currentUser])


    
    

    return(
        <div className="pendingrequests_container">
            <h1 className="center">Requests to me</h1>
            {requestsToMe.map((requestToMe, key) => (
                <>
                <div key={requestToMe.id} className="pendingrequests_item">
                    {key} | {requestToMe.requestor_id} | 
                    {requestToMe.receiver_id} | {requestToMe.status}
                    </div>
                    <button className="pendingrequests_button" onClick={declineUser}>Decline</button>
					<button className="pendingrequests_button" onClick={approveUser}>Approve</button>
                    
                </>
            ))}
        </div>
    )
}

export default RequestsToMe