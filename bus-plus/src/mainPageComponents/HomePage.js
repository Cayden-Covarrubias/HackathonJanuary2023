import React from 'react'
import CheckIn from './CheckIn'
import Navbar from './Navbar'
import ProgressGuage from './ProgressGuage'
import Redeem from './Redeem.js'
import "./HomePage.css";
function HomePage() {
  return (
    <div className="homePage">
    <div className='container'>
        <ProgressGuage className= "gauge"/>
        <CheckIn className="check-in"/>
        <Redeem className= "Redeem"/>
        <div className = "navBar">
        <Navbar />
        </div>
    </div>
    </div>
  )
}

export default HomePage