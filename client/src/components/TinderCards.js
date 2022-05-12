import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Link } from 'react-router-dom';



function TinderCards({onSwipe, currentUser, selectedPerson, setSelectedPerson}) {
    const [users, setUsers] = useState([])
    
    console.log(currentUser)

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const filtered = data.filter((cards) => cards.requestor_id !== currentUser.id)
            setUsers(filtered)
        })
    },[])


 
     //0.    Task: figure out all users the current user has interacted with and filter the list of people I can swipe on later; see notes below:

        // Get all matches I sent out (pending and accepted)
        // Store them in matches
    
        // Then I want to use these matches to understand
        // which users I've seen / interacted with before 
        // I want to remove these users from the list of all users
        // so that users that I see in the app later, are not people
        // I've interacted with
    
        // Accepted: [1, 3]
        // Pending: [4, 7]
        // Dislikes: [2, 5]
        // All users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // Users that you want to see on app: [6, 8, 9, 10]
    
   //    AND 
    
        // Remove me from the master list of users
       
        // Filter again here with matches so that i dont see people i've interacted with
        // Remove people i've interacted with from the master list
        // const filteredAgain = filtered.filter(())

    return(
        <div >
            <div className="cardcontainer">
            {users.map((user) => {
              return  <TinderCard
                className="swipe"
                key={user.id}
                onSwipe={(direction) => onSwipe(direction, user)}
                preventSwipe={['up', 'down']}
                //on right swipe create match and set status to pending
                >
                    <div className="wholecard"> 
                    <div
                    style={{backgroundImage: `url(${user.profilepic})`}}
                    className="card"
                    >
                    </div>
                    <div className="con">
                        <h3 className="name">{user.name} &nbsp;  | &nbsp;  {user.age}</h3>
                        <p className="user_job">{user.job}</p>
                    </div>
                    <p><Link to='/viewprofile/'>View Profile</Link></p>
                        <br />
                        <p className="userbio">{user.bio}</p>
                    </div>
                </TinderCard>
})}
        </div>
        </div>
    )
}

export default TinderCards