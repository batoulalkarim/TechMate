import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({setUser, user}) {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));
    }

    return(
        <div>
            <p>{user.name}</p>
            <nav>
                <Link to="/editaccount">Edit Account</Link>
                <Link to="/browse">Browse</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default NavBar;