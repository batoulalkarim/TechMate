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
	return (
		<div>
			<h1>Pending requests go here</h1>
			{pendingRequests.map((pendingRequest, key) => (
				<>
					<div>
						{key} | {pendingRequest.receiver_id} |
						{pendingRequest.requestor_id} | {pendingRequest.status}
					</div>
				</>
			))}
		</div>
	)
}

export default PendingRequests