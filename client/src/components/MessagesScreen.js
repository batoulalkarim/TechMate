import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';

function MessagesScreen({currentUser, selectedPerson, setSelectedPerson}) {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/messages/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setMessages(data)
        })
        .catch(console.error)
    }, [])


    function handleSend(e) {
        e.preventDefault();
        createMessage(selectedPerson, currentUser, input);
        setMessages([...messages, { content: input }]);
        setInput('');
    }

    function createMessage(selectedPerson, currentUser, input){
        const message = {
            requestor_id: currentUser.id, 
            receiver_id: selectedPerson.id,
            content: input,
        }
        const url='/messages'
        const settings = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(message)
        }
        fetch(url, settings)
        .then((res) => {
            if(res.ok){
            console.log(res)
            // setSelectedPerson(selectedPerson)
            // console.log(selectedPerson)
            setMessages([...messages, {receiver_id: selectedPerson.id , requestor_id: currentUser.id, content: input}])
            
            } else {
                // res.json().then(e => setErrors(Object.entries(e.error).flat()))
                console.log(console.error)
            }
        })
        .catch(console.error)
    }

    return(
        <div className="messageScreen">
            <p className="messageScreen_timestamp">YOU MATCHED WITH {selectedPerson.name.toUpperCase()} ON 05/12/22</p>
            {messages.map((message) => {
                if(message.requestor_id === selectedPerson.id && message.receiver_id === currentUser.id){
                 return   <>
                <div className ="messageScreen_message" key={message.id}>
                    <Avatar
                        className="messageScreen_image"
                        alt={message.name}
                        src={selectedPerson.profilepic}
                    />
                    <p className="messageScreen_text">{message.content}</p>
                </div>
               
                </>
                } else if(message.requestor_id === currentUser.id && message.receiver_id === selectedPerson.id) {
                    return (
                    <div className ="messageScreen_message">
                        <p className="messageScreen_textUser">{message.content}</p>
                    </div>
                    )
                }
                
            })}
          
                <form className="messageScreen_inputForm">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="messageScreen_inputField"
                    type="text"
                     placeholder="Type a message..."/>
                    <button type="submit" onClick={handleSend} className="messageScreen_inputButton">SEND</button>
                </form>
           
        </div>
    )
}

export default MessagesScreen