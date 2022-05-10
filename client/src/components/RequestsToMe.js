import React, { useState, useEffect } from 'react'

function RequestsToMe({ currentUser, selectedPerson }) {
    const [requestsToMe, setRequestsToMe] = useState([])

    useEffect(() => {
        currentUser && 
        fetch(`/matches/currentuser/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRequestsToMe(data)
        })
    }, [currentUser])


    function declineUser(){
        console.log("declined")
    }

    // function approve(event, selectedPerson ){
    //    event.stopPropagation(); 
    //    console.log(requestsToMe)
    //    const foundIndex = requestsToMe.findIndex(item => selectedPerson.id === item.requestor_id) ;
    //    if(foundIndex === -1) {
    //        console.log(selectedPerson)
               
    //    }
        
        //   const foundIndex = requestsToMe.findIndex(item => selectedUser.id === item.requestor_id) ;
        //   const copyArray = [...requestsToMe]
        //   copyArray.splice(foundIndex, 1);
        // console.log(copyArray)
        //    setRequestsToMe(copyArray)
        //    updateMatch(currentUser, selectedUser, "accepted", true)
    // }

    function approve(event, requestor){
        event.preventDefault();
        const foundIndex = requestsToMe.findIndex(item => item.requestor_id === requestor.id);
        if (foundIndex === -1) {
            console.log("index is: ", foundIndex)
        } else {
            const copyArray = [...requestsToMe, 1];
            // console.log(copyArray)
            copyArray.splice(foundIndex, 1);
            setRequestsToMe(copyArray)
            updateMatch(currentUser, requestor)

        }
    }

    
    function updateMatch(currentUser, selectedPerson, status, likes){
        const updatedMatch = {
          requestor_id: selectedPerson.id,
          receiver_id: currentUser.id, 
          status: status,
          likes: likes 
        }
        const url ='/matches'
        const settings ={
          method: "PUT",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(updatedMatch)
        }
        fetch(url, settings)
        .then((res) => {
          console.log(res)
          res.json().then(setRequestsToMe)
          console.log(setRequestsToMe)
        })
        .catch(console.error)
      }

    return(
        <div className="pendingrequests_container">
            <h1 className="center">People Who Swiped Right On Me 👀</h1>
            {requestsToMe.map((requestToMe, key) => (
                <>
                <div key={requestToMe.id} className="pendingrequests_item">
                    <img src={requestToMe.requestor.profilepic} alt="ohno" className="image" />
                        &nbsp; <strong>{requestToMe.requestor.name}</strong> &nbsp; Requested to match with you 
                        | {requestToMe.requestor.age} | 
                    </div>
                    <button className="viewprofile">View Profile</button>
                    <div className="rr_right">
                        Request is {requestToMe.status}
                    <button className="pendingrequests_button" onClick={declineUser}>Decline</button>
					<button className="pendingrequests_button" onClick={(e) => approve(e, requestToMe.requestor)}>Approve</button>
                    </div>
                </>
            ))}
        </div>
    )
}

export default RequestsToMe;