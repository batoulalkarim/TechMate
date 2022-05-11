import React from 'react';

function ViewProfile({ currentUser, selectedPerson }){
    console.log(selectedPerson)
    return(
        <div className="profilepage_container">
            <div className="profilepage_body">
            <h1 className="vp_title">{selectedPerson.name}</h1>
            <h2 className="vp_title">{selectedPerson.job}</h2>
            <img alt="" src={selectedPerson.profilepic} className="vp_image"/>
            <p className="vp_bio">{selectedPerson.age} | {selectedPerson.location}</p>
            <p className="vp_bio">{selectedPerson.bio}</p>
            </div>
        </div>
    )
}

export default ViewProfile;