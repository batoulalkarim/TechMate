import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'


function PersonalHeader({ setUser }) {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));
    }

    return(
        <div className="personalheader">
             <IconButton onClick={handleLogout}>
                <LogoutIcon fontSize="large" className="header_icon"  />
            </IconButton>
            <Link to="/createaccount">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            </Link>
            <img 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem-768x432.jpg" 
            alt="tinder logo" 
            className="logo"/>
            <Link to="/myrequests">
            <IconButton>
                <PeopleIcon fontSize="large" className="header_icon"  />
            </IconButton>
            </Link>
            <Link to="/">
            <IconButton >
                <ArrowForwardIosIcon fontSize="large" className="header_icon"  />
            </IconButton>
            </Link>
        </div>
    )
}

export default PersonalHeader