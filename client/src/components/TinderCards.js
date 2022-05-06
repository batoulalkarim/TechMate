import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';



function TinderCards({onSwipe, currentUser}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const filtered = data.filter((cards) => cards.id !== currentUser.id)
            setUsers(filtered)
        })
    },[])

  

    return(
        <div >
            <div className="cardcontainer">
            {users.map((user) => {
              return  <TinderCard
                className="swipe"
                key={user.name}
                onSwipe={(direction) => onSwipe(direction, user)}
                preventSwipe={['up', 'down']}
                //on right swipe create match and set status to pending
                >
                    <div 
                    style={{backgroundImage: `url(${user.profilepic})`}}
                    className="card"
                    >
                        <h3>{user.name}</h3>
                    </div>
                </TinderCard>
})}
        </div>
        </div>
    )
}

export default TinderCards