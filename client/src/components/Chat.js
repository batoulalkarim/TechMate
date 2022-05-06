import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Chat({ name, message, profilepic, timestamp}) {
    return(
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat_image" alt={name} src={profilepic} />
            <div className="chat_details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat_timestamps">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat