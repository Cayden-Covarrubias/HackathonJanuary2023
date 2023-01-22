import React, {useState} from 'react'
import {MdHome} from 'react-icons/md';
import {RiAccountCircleLine} from 'react-icons/ri';
import {TbBrandBooking} from 'react-icons/tb';
import {motion} from 'framer-motion';
import './Navbar.css';
import Connect from './Connect';

function Navbar() {

  const [home,setHome] = useState(true);
  const [Profile,setProfile] = useState(false);
  const [PageInfo,setPageInfo] = useState(false);

  const handel1=()=>{
    setHome(false);
    setProfile(false);
    setPageInfo(true);
  }

  const handel2=()=>{
    setHome(true);
    setProfile(false);
    setPageInfo(false);
  }

  const handel3=()=>{
    setHome(false);
    setProfile(true);
    setPageInfo(false);
  }


  return (
    <div>
    <Connect home={home} Profile={Profile} PageInfo={PageInfo}/>
    <div className='nav-head'>
       <nav >
        <ul className='nav-links'>
        <li ><motion.i whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}} onClick = {handel1}><TbBrandBooking/></motion.i></li>
        <li ><motion.i whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}} onClick = {handel2}><MdHome/></motion.i></li>
        <li ><motion.i whileHover={{scale: 1.1, boxShadow: '0px 10px 20px #89CFF0' }} 
    initial = {{scale: 1}} onClick = {handel3}><RiAccountCircleLine/></motion.i></li>
        </ul>
       </nav>
    </div>
    </div>
  )
}

export default Navbar