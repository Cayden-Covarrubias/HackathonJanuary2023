import React,{useState} from 'react'
//import Navbar from './Navbar.js';
import "./HomePage.css";
import Gauge from './Gauge.js';
import {motion} from 'framer-motion';
import Scan from './Scan';

function HomePage() {

  const [scan,setScan] = useState(false);
  if(!scan){
  return (
    <div className="homePage">
    <motion.h1 className='logo' animate={{scale: 1, transition: {duration: 3}, y: [0,60]}} initial={{scale: 0}}>Bus+</motion.h1>
    <motion.div className="gauge" animate= {{rotate: 360, transition: {duration: 3}, scale:1, y: [0,-10] }} initial = {{scale:1.3}}>
    <Gauge className="Gauge" />
    </motion.div>
    <div className='container'>
    <motion.button className='check-in' whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}}><h1>Check-in</h1></motion.button>
    <motion.button className='Redeem' whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}} onClick={()=>{setScan(true)}}><h1>Redeem PTS</h1></motion.button>
    </div>
    </div>
  )}
  else{
    return(<Scan/>);
  }
}

export default HomePage