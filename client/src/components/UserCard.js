import React from 'react'

function UserCard({user, onMatchRequest, onDelete}) {
    return(
        <div className="usercard" key={user.id}>
            <div className="userimg">
                <img alt="ohno" src={user.profilepic} />
            </div>
            <div className="cardcontent">
                <h4>{user.name}</h4>
                <h4>{user.age} ||  {user.bio}</h4>
            </div>
            <div>
                <button onClick={() => onMatchRequest(user)}>yes</button>
                <button onClick={(event) => {
                    return onDelete(event, user);
                }}>no</button>
            </div>
        </div>
    )
}

export default UserCard;