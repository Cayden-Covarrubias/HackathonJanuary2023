import React from 'react'
import Navbar from './Navbar.js';
import "./HomePage.css";
import Gauge from './Gauge.js';
import {motion} from 'framer-motion';

function HomePage() {
  return (
    <div className="homePage">
    <div className='container'>
    <Gauge className="gauge"/>
    <motion.button className='check-in' whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}}><h1>Check-in</h1></motion.button>
    <motion.button className='Redeem' whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}}><h1>Redeem PTS</h1></motion.button>
    <Navbar />
    </div>
    </div>
  )
}

export default HomePage