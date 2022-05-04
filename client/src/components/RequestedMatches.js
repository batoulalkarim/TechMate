import React from 'react';
import UserCard from './UserCard';

function RequestedMatches({ requestMatchList, onDelete }){

    const userCards = requestMatchList.map((user) => {
        return <UserCard key={user.id} user={user} onDelete={onDelete} />
    })
    return(
        <div>
            <div>
                {userCards}
            </div>
        </div>
    )
}

export default RequestedMatches;