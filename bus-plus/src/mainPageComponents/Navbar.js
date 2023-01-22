import React from 'react'
import "./NavBar.css"
import {HiHome} from 'react-icons/hi';
import {BsBookHalf} from 'react-icons/bs';
import {HiOutlineInformationCircle} from 'react-icons/hi';

function Navbar() {

    //const list = ["Book","Home", "information"];
  return (
    <div>
       <ul className='list'>
        {/*{list.map((listData)=>{return(<li key = {listData} className="navBar">{listData}</li>)})}*/}
        <li className='navBar'><BsBookHalf/></li>
        <li className='navBar'><HiHome/></li>
        <li className='navBar'><HiOutlineInformationCircle/></li>
       </ul>
    </div>
  )
}

export default Navbar