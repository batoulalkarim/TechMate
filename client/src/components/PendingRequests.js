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
		if(foundIndex === 1){
			console.log("You didn't request them")
		} else {
			console.log(currentUser)
			const copyArray = [...pendingRequests]
			copyArray.splice(foundIndex, 1);

			setPendingRequests(copyArray)
		}
	}


	return (
		<div className="pendingrequests_container">
			<h1 className="center">Pending Requests(people you swiped right on)</h1>
			{pendingRequests.map((pendingRequest, key) => (
				<>
					<div key={pendingRequest.id} className="pendingrequests_item">
						{key} | {pendingRequest.receiver_id} |
						{pendingRequest.requestor_id} | {pendingRequest.status}
						
					</div>
					<button className="pendingrequests_button" onClick={handleRemoveRequest}>Cancel Request</button>
					
				</> 
			))}
		</div>
	)
}

export default PendingRequests