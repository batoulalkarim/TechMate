import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
// import SwipeButtons from './SwipeButtons';


function TinderCards() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    },[])

    return(
        <div >
            <div className="cardcontainer">
            {users.map((user) => {
              return  <TinderCard
                className="swipe"
                key={user.name}
                preventSwipe={['up', 'down']}
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
        {/* <SwipeButtons /> */}
        </div>
    )
}

export default TinderCards