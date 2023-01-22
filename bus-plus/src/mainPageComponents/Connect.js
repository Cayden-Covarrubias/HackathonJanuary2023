import React from 'react'
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Profile  from './ProfileComponent/Profile.js';
function Connect(props) {
    if(props.home){
        return(<HomePage/>);
    }
    else if(props.Profile){
        return(<Profile/>);
    }
    else{
        return(<BookingPage/>);
    }
}

export default Connect