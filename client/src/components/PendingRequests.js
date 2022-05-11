import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PendingRequests({ currentUser, setSelectedPerson }) {
	const [pendingRequests, setPendingRequests] = useState([])

	// console.log(currentUser)
	useEffect(() => {
		currentUser &&
			fetch(`/matches/user/${currentUser.id}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					setPendingRequests(data)
				})
				.catch(console.error)
	}, [currentUser])

// console.log(selectedPerson)
	function handleRemoveRequest(e, receiver){
		e.preventDefault()
		setSelectedPerson(receiver)
		console.log(receiver)
		deleteRequest(receiver)
	}

	function deleteRequest(receiver) {
		// event.preventDefault();
		const foundIndex = pendingRequests.findIndex(item => item.receiver_id === receiver.id);
		if (foundIndex === -1) {
			console.log(foundIndex)
		} else {
			const copyArray = [...pendingRequests]
			copyArray.splice(foundIndex, 1)
			setPendingRequests(copyArray)
		}
	}

	let navigate = useNavigate()
	

	function handleViewProfile(e, receiver){
		e.preventDefault();
		setSelectedPerson(receiver)
		console.log(receiver)
		navigate(`/viewprofile/${receiver.id}`)
	}


	return (
		<div className="pendingrequests_container">
			<h1 className="center">People I Swiped Right On 👻</h1>
			{pendingRequests.map((pendingRequest, key) => (
				<>
					<div key={pendingRequest.id} className="pendingrequests_item">
						<img src={pendingRequest.receiver.profilepic} alt="" className="image"/>
						     &nbsp; You Requested to match with &nbsp; <strong>{pendingRequest.receiver.name}</strong> 
							&nbsp; | {pendingRequest.receiver.age} | 
						
					</div>
					<button className="viewprofile" onClick={(e) => handleViewProfile(e, pendingRequest.receiver)}>View Profile</button>
					<div className="pr_right">
					Request is {pendingRequest.status}
					<button className="pendingrequests_button" onClick={(e) => handleRemoveRequest(e, pendingRequest.receiver )}>Cancel Request</button>

					{/* <button className="pendingrequests_button" onClick={(e) => handleRemoveRequest(e, selectedPerson)}>Cancel Request</button> */}
					</div>
				</> 
			))}
		</div>
	)
}

export default PendingRequests