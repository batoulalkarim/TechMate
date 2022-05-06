import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
    return(
        <div className="swipebuttons">
            <IconButton className="swipebutton_repeat">
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className= "swipebutton_left">
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