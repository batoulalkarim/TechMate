import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Footer from './Footer';

function AcceptedMatches({ setSelectedPerson, currentUser }) {
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

    console.log(currentUser)

    function handleMessage(currentUser,requestor, receiver){
        if(currentUser.id === requestor.id){
            setSelectedPerson(receiver)
        } else {
            setSelectedPerson(requestor)
        }
    }

    let navigate = useNavigate()

    function handleFirstClick(e, receiver){
        e.preventDefault();
        setSelectedPerson(receiver)
        console.log(receiver)
        navigate(`/viewprofile/${receiver.id}`)
    }

    function handleSecondClick(e, requestor){
        e.preventDefault()
        setSelectedPerson(requestor)
        console.log(requestor)
        navigate(`/viewprofile/${requestor.id}`)
    }

   
    return(
        <div className="pendingrequests_container">
            <h1 className="center">🥰 People I've Matched With 🥰</h1>
            {acceptedRequests &&
            acceptedRequests?.map((request) => {
                if(request?.requestor_id === currentUser?.id){
                return <>
                <div key={request.id} className="pendingrequests_item">
                   <img src={request?.receiver.profilepic} alt="ohno" className="image" />
                   &nbsp;You've matched with &nbsp; <strong>{request?.receiver.name}!</strong>
                    &nbsp; | {request?.receiver.age} | 
                </div>
               
                <button className="viewprofile" onClick={(e) => handleFirstClick(e, request?.receiver)}>View Profile</button>
             
                <div className="accepted_right">
                Request has been {request?.status}
                <Link to={`/messages/${request.receiver_id}`}>
                <button className="pendingrequests_button" onClick={(e) => handleMessage(e, request?.receiver)}>Message {request.receiver.name} </button>
                </Link>
                </div>
                
                </>
                } else if(request?.receiver_id === currentUser.id) {
                    return <>
                    <div key={request.id} className="pendingrequests_item">
                   <img src={request?.requestor.profilepic} alt="ohno" className="image" />
                   &nbsp;You've matched with &nbsp; <strong>{request?.requestor.name}!</strong>
                    &nbsp; | {request?.requestor.age} | 
                </div>
                <button className="viewprofile" onClick={(e) => handleSecondClick(e, request.requestor)}>View Profile</button>
                <div className="accepted_right">
                Request has been {request?.status}
                <Link to={`/messages/${request.requestor_id}`}>
                <button className="pendingrequests_button" onClick={(e) => handleMessage(e, request.requestor)}>Message {request.requestor.name} </button>
                </Link>
                </div>
                </>
                }
            })}
        </div>

    )
}

export default AcceptedMatches;