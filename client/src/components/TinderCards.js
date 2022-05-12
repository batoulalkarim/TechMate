import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useNavigate } from 'react-router-dom';



function TinderCards({onSwipe, currentUser, selectedPerson, setSelectedPerson}) {
    const [users, setUsers] = useState([])
    const [matches, setMatches] = useState([])
    
    console.log(currentUser)

    useEffect(() => {
        fetch('http://localhost:3000/matches')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMatches(data)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const filtered = data.filter((cards) => cards.id !== currentUser.id)
            setUsers(filtered)
        })
    },[])

  
 
    let navigate = useNavigate()


    function handleViewProfile(e, receiver) {
        e.preventDefault()
        setSelectedPerson(receiver)
        navigate(`/viewprofile/${receiver.id}`)
    }

    function handleSet(user){
        setSelectedPerson(user)
        matches &&
        matches?.map((match) => {
            if(match?.requestor_id === selectedPerson?.id && match?.receiver_id === currentUser?.id){
                const copyArray = [...matches]
                copyArray.splice(match?.id, 1)
                setMatches(copyArray)
            } else {
                console.log('else hit')
            }
        })

    }

  
    return(
        <div >
            <div className="cardcontainer">
            {users &&
            users?.map((user) => {
              return  <TinderCard
                className="swipe"
                key={user.id}
                onSwipe={(direction) => onSwipe(direction, user)}
                preventSwipe={['up', 'down']}
                //on right swipe create match and set status to pending
                >
                    <div className="wholecard" onMouseEnter={() => handleSet(user)}> 
                    <div
                    style={{backgroundImage: `url(${user?.profilepic})`}}
                    className="card"
                    >
                    </div>
                    <div className="con">
                        <h3 className="name">{user?.name} &nbsp;  | &nbsp;  {user?.age}</h3>
                        <p className="user_job">{user?.job}</p>
                    </div>
                    <button className="vpbutton" onClick={(e) => handleViewProfile(e, user)}>View Profile</button>
                        <br />
                    </div>
                </TinderCard>
})}
        </div>
        </div>
    )
}

export default TinderCards