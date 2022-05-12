import React, {useEffect, useState} from 'react';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Messages({ currentUser, setSelectedPerson }) {
    const [acceptedMatches, setAcceptedMatches] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/matches/accepted/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setAcceptedMatches(data)
        })
    }, [])

    const navigate = useNavigate();

    function handlefirstClick(e, receiver){
        e.preventDefault()
        setSelectedPerson(receiver)
        console.log(receiver)
        navigate(`/messages/${receiver.id}`)
    }

    function handlesecondClick(e, requestor){
        e.preventDefault()
        setSelectedPerson(requestor)
        console.log(requestor)
        navigate(`/messages/${requestor.id}`)
    }

    return(
        <div className="chats">
            <h1 className="center">Messages</h1>
            {acceptedMatches &&
            acceptedMatches?.map((request) => {
                if(request?.requestor_id === currentUser?.id){
                    return <>
                    <div className="chat" key={request.id} onClick={(e) => handlefirstClick(e, request?.receiver)}>
                    <Avatar className="chat_image" alt={request?.receiver.name} src={request?.receiver.profilepic} />
                    <div className="chat_details">
                        <h2>{request?.receiver.name}</h2>
                      
                    </div>
                    <p className="chat_timestamps">6 Minutes ago</p>
                    </div>
                    </>
                } else if(request?.receiver_id === currentUser?.id){
                    return <>
                    <div className="chat" key={request.id} onClick={(e) => handlesecondClick(e, request?.requestor)}>
                    <Avatar className="chat_image" alt={request?.requestor.name} src={request?.requestor.profilepic} />
                    <div className="chat_details">
                        <h2>{request?.requestor.name}</h2>
                      
                    </div>
                    <p className="chat_timestamps">2 Minutes ago</p>
                    </div>
                    </>
                }
            })}

        </div>
    )
}

export default Messages