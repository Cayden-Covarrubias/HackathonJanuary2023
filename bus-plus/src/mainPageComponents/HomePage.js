import React from 'react'
import Navbar from './Navbar.js';
import "./HomePage.css";
function HomePage() {
  return (
    <div className="homePage">
    <button className='check-in'><h1>Check-in</h1></button>
    <button className='Redeem'><h1>Redeem PTS</h1></button>
    <Navbar/>
    </div>
  )
}

export default HomePage