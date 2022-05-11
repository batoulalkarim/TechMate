import React from 'react';

function MyAccount({ currentUser }){

    console.log(currentUser)
    return(
        <div className="profilepage_container">
            <div className="profilepage_body">
            <h1 className="vp_title">{currentUser.name}</h1>
            <h2 className="vp_title">{currentUser.job}</h2>
            <img alt="" src={currentUser.profilepic} className="vp_image"/>
            <p className="vp_bio">{currentUser.age} | {currentUser.location}</p>
            <p className="vp_bio">{currentUser.bio}</p>
            </div>
        </div>
    )
}

export default MyAccount;