import React from 'react';
import { Link } from 'react-router-dom';



function RequestedMatches(){
    return(
        <div>
        <div className="matches_container">
            <Link to="/pendingrequests">
                Pending Requests
            </Link>
            <Link to="/acceptedmatches">
                Accepted Matches
            </Link>
            <Link to="/requestsreceived">
                My Requests
            </Link>
        </div>
        
         </div>
    )
}

export default RequestedMatches;