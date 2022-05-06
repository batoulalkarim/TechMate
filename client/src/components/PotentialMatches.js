import React, { useState, useMemo, useRef } from 'react';
// import UserCard from './UserCard';
import TinderCard from 'react-tinder-card';

function PotentialMatches({users, onMatchRequest, onDelete}){
    const [currentIndex, setCurrentIndex] = useState(users.length - 1)
    const [lastDirection, setLastDirection] = useState();


    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
          Array(users.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      );

      const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
      }
      const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
        
      }
    
      const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
      }

    // const cards = users.map((user) => {
    //     return(<UserCard key={user.id} user={user} onMatchRequest={onMatchRequest} onDelete={onDelete} />)
    // })
     
   

    return(
        <div className="potentialcont">
        <div>
            {users.map((user, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            user={user}
            onMatchRequest={onMatchRequest} 
            onDelete={onDelete}
            key={user.name}
            onSwipe={(dir) => swiped(dir, user.name, index)}
            onCardLeftScreen={() => outOfFrame(user.name, index)}
             >
            <div
            style={{ backgroundImage: 'url(' + user.profilepic +')' }}
              className="card"
            >
                <h3>{user.name}</h3>
            </div>
           </TinderCard>
            ))}
        </div>
        <div className="buttons">
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get started!
        </h2>
      )}
      </div>
    )
}

export default PotentialMatches;