import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RequestsToMe({ currentUser, setSelectedPerson }) {
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


    function declineUser(event, requestor, match_id){
        event.preventDefault();
        const foundIndex = requestsToMe.findIndex(item => item.requestor_id === requestor.id);
        if (foundIndex === -1){
        } else {
            console.log(foundIndex)
            const copyArray = [...requestsToMe];
            copyArray.splice(foundIndex, 1)
            setRequestsToMe(copyArray)
            updateMatch(currentUser, requestor, "pending", false, match_id)
        }
    }

   

    function approve(event, requestor, match_id){
        event.preventDefault();
        const foundIndex = requestsToMe.findIndex(item => item.requestor_id === requestor.id);
        if (foundIndex === -1) {
            console.log("index is: ", foundIndex)
        } else {
            const copyArray = [...requestsToMe];
            copyArray.splice(foundIndex, 1);
            setRequestsToMe(copyArray)
            updateMatch(currentUser, requestor, "accepted", true, match_id)
        }
    }

    
    function updateMatch(currentUser, selectedPerson, status, likes, match_id){
        console.log(currentUser, selectedPerson, status, likes)
        const updatedMatch = {
          requestor_id: selectedPerson.id,
          receiver_id: currentUser.id, 
          status: status,
          likes: likes,
        }
        const url =`/matches/${match_id}`
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
        //   res.json().then(setRequestsToMe)
        })
        .catch(console.error)
      }

      let navigate = useNavigate()

      function handleViewProfile(e, requestor) {
          e.preventDefault()
          setSelectedPerson(requestor)
          console.log(requestor)
          navigate(`/viewprofile/${requestor.id}`)
      }

    return(
        <div className="pendingrequests_container">
            <h1 className="center">People Who Swiped Right On Me 👀</h1>
            {requestsToMe && 
                requestsToMe?.map((requestToMe, key) => (
                <>
                <div key={requestToMe.id} className="pendingrequests_item">
                    <img src={requestToMe?.requestor?.profilepic} alt="ohno" className="image" />
                        &nbsp; <strong>{requestToMe?.requestor?.name}</strong> &nbsp; Requested to match with you 
                        | {requestToMe?.requestor?.age} | 
                    </div>
                    <button className="viewprofile" onClick={(e) => handleViewProfile(e, requestToMe?.requestor)}>View Profile</button>
                    <div className="rr_right">
                        Request is {requestToMe?.status}
                    <button className="pendingrequests_button" onClick={(e) => declineUser(e, requestToMe?.requestor, requestToMe?.id)}>Decline</button>
					<button className="pendingrequests_button" onClick={(e) => approve(e, requestToMe?.requestor, requestToMe?.id)}>Approve</button>
                    </div>
                </>
            ))}
        </div>
    )
}

export default RequestsToMe;