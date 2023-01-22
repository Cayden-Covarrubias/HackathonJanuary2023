import React from 'react'
import {MdHome} from 'react-icons/md';
import {RiAccountCircleLine} from 'react-icons/ri';
import {TbBrandBooking} from 'react-icons/tb';

function Navbar() {
  return (
    <div>
       <nav>
        <TbBrandBooking/>
        <MdHome/>
        <RiAccountCircleLine/>
       </nav>
    </div>
  )
}

export default Navbar