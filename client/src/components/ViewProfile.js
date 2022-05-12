import React from 'react';

function ViewProfile({ currentUser, selectedPerson }){
    console.log(selectedPerson)
    return(
        <div className="profilepage_container">
            <div className="profilepage_body">
            <h1 className="vp_title">{selectedPerson?.name}</h1>
            <h2 className="vp_title">{selectedPerson?.job}</h2>
            <img alt="" src={selectedPerson?.profilepic} className="vp_image"/>
            <p className="vp_bio">{selectedPerson?.age} | {selectedPerson?.location}</p>
            <p className="vp_bio">{selectedPerson?.bio}</p>
            <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" width="40" alt="logo ig" className="center"/>
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-icon-png-logo-2.png" width="40" alt="twitter bird icon png logo" className="center"/>
            <img src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png" width="40" alt="linkedin shiny icon logo" className="center"/>
            <img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-file-gmail-icon-svg-wikimedia-commons-0.png" width="40" alt="logo gmail png file gmail icon svg wikimedia commons" className="center"/>
            <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="40" alt="512x512 logo github icon" className="center"/>
            </div>
          
        </div>
    )
}

export default ViewProfile;