import React from 'react';
import { useState, useEffect } from 'react'

function AcceptedMatches({ currentUser }) {
    const [acceptedRequests, setAcceptedRequests] = useState([])

    useEffect(() => {
        currentUser && 
        fetch(`/matches/accepted/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setAcceptedRequests(data)
        })
    }, [currentUser])
    return(
        <div>
            <h1>Accepted matches here</h1>
            {acceptedRequests.map((request, key) => (
                <>
                <div key={request.id} >
                    {key} | {request.requestor_id} |
                    {request.receiver_id} | {request.status}
                </div>
                </>
            ))}
        </div>

    )
}

export default AcceptedMatches;