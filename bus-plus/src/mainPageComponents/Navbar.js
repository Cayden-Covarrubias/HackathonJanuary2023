import React from 'react'
import {MdHome} from 'react-icons/md';
import {RiAccountCircleLine} from 'react-icons/ri';
import {TbBrandBooking} from 'react-icons/tb';
import {motion} from 'framer-motion';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav-head'>
       <nav >
        <ul className='nav-links'>
        <li ><motion.i whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}}><TbBrandBooking/></motion.i></li>
        <li ><motion.i whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}}><MdHome/></motion.i></li>
        <li ><motion.i whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}}><RiAccountCircleLine/></motion.i></li>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar