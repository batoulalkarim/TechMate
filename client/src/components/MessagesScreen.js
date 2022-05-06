import React, { useState } from 'react';
import { Avatar } from '@mui/material';

function MessagesScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Mark",
            image: 'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg',
            message: "whats up "
        },
        {
            name: "Mark",
            image: 'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg',
            message: "How's it going! "
        },
        {
            message: "whats up "
        },
    ])

    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, {message: input}])
        setInput('');
    }
    return(
        <div className="messageScreen">
            <p className="messageScreen_timestamp">YOU MATCHED WITH MARK ON 10/08/20</p>
            {messages.map((message) => {
               return message.name ? (
                <div className ="messageScreen_message">
                    <Avatar
                        className="messageScreen_image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="messageScreen_text">{message.message}</p>
                </div>
                ) : (
                <div className ="messageScreen_message">
                    <p className="messageScreen_textUser">{message.message}</p>
                </div>
                )
                
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