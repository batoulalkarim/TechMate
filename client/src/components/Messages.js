import React from 'react';
import Chat from './Chat'

function Messages() {
    return(
        <div className="chats">
            <Chat 
                name="Mark"
                message="Hey, it's nice to meet you! 🥰"
                timestamp="35 minutes ago"
                profilepic = "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
            />
            <Chat 
                name ="Jared"
                message="How are you doing? 😜"
                timestamp="55 minutes ago"
                profilepic="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
            />
            <Chat
                name="Linx"
                message="Well hello there young lady! 👀😁"
                timestamp="2 days ago"
                profilepic="https://us.123rf.com/450wm/luismolinero/luismolinero1909/luismolinero190917934/130592146-handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.jpg?ver=6"
            />

        </div>
    )
}

export default Messages