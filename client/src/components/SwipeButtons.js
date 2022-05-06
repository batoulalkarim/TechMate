import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons({ users, setUsers, user}) {

    function handleRejectUser(user){
        const foundIndex = users.findIndex(item => user.id === item.id);
        if (foundIndex === -1) {
            console.log("User isn't in your matches")
        } else {
            const copyArray = [...users];
            copyArray.splice(foundIndex, 1);

            setUsers(copyArray)
        }
        fetch(`http://localhost:3000/users/${user.id}/requestors`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log("you swiped no on " + user.name);
    }

    return(
        <div className="swipebuttons">
            <IconButton className="swipebutton_repeat">
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className= "swipebutton_left" onClick={handleRejectUser}>
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className = "swipebutton_star">
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_right">
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className = "swipebutton_lightening">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons