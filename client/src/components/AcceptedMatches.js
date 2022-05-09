import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AcceptedMatches({ user, currentUser }) {
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

    // let navigate = useNavigate();
    // let history = useHistory();
    function handleMessage(){
        // history.push('/chat')
        console.log('i made it')
        // navigate(`chat`);
        // createMessage(user, selectedUser)
        
    }

    // function createMessage(user, selectedUser, content){
    //     const message = {
    //         requestor_id: user.id,
    //         receiver_id: selectedUser,
    //         content: content,
    //     }
    //     const url = '/messages'
    //     const settings ={
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(message)
    //     }
    //     fetch(url, settings)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch(console.error)
    // }


    return(
        <div className="pendingrequests_container">
            <h1 className="center">🥰 People I've Matched With 🥰</h1>
            {acceptedRequests.map((request, key) => (
                <>
                <div key={request.id} className="pendingrequests_item">
                   <img src={request.receiver.profilepic} alt="ohno" className="image" />
                   &nbsp;You've matched with &nbsp; <strong>{request.receiver.name}!</strong>
                    &nbsp; | {request.receiver.age} | 
                </div>
                <button className="viewprofile">View Profile</button>
                <div className="accepted_right">
                Request has been {request.status}
                <Link to={`/chat/${request.receiver.name}`}>
                <button className="pendingrequests_button">Message {request.receiver.name} </button>
                </Link>
                </div>
                </>
            ))}
        </div>

    )
}

export default AcceptedMatches;