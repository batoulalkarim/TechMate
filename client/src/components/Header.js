import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

function Header({ backButton }) {
    const navigate = useNavigate();

    return(
        <div className="header">

            {backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header_back" />
                </IconButton>
            ) : (
                <Link to="/createaccount">
                <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
                </IconButton>
                </Link>
            )}
           
            <Link to="/">
            <img 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem-768x432.jpg" 
            alt="tinder logo" 
            className="logo"/>
            </Link>
            <Link to="/messages">
            <IconButton>
            <ForumIcon fontSize="large"  className="header_icon" />
            </IconButton>
            </Link>
        </div>
    )   
}

export default Header