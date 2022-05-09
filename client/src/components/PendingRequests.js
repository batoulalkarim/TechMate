import React from 'react'
import { useState, useEffect } from 'react'

function PendingRequests({ currentUser }) {
	const [pendingRequests, setPendingRequests] = useState([])

	useEffect(() => {
		currentUser &&
			fetch(`/matches/user/${currentUser.id}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					setPendingRequests(data)
				})
	}, [currentUser])

	function handleRemoveRequest(currentUser){
		const foundIndex = pendingRequests.findIndex(item => currentUser.id === item.id )
		if(foundIndex === -1){
			console.log(currentUser)
			const copyArray = [...pendingRequests]
			copyArray.splice(foundIndex, 1);

			setPendingRequests(copyArray)
		} else {
			console.log('oh this went wrong')
		}
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
					<button className="viewprofile">View Profile</button>
					<div className="pr_right">
					Request is {pendingRequest.status}
					<button className="pendingrequests_button" onClick={handleRemoveRequest}>Cancel Request</button>
					</div>
				</> 
			))}
		</div>
	)
}

export default PendingRequests