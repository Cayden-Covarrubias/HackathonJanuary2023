import React from 'react'
import './Profile.css'
import { motion} from 'framer-motion';
import { useState } from 'react';

function Profile() {
  let [pay,setPay] = useState(false);

  const payments=()=>{return(setPay(!pay))};
  return (
    <div>
    {!pay ?
    <span className = "box-type">
    <div className='card'>
        <div className='upper-container'>
                <motion.img src = "" 
               animate={{scale: [1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1,0.7,1],
               transition: {duration: 8}, boxShadow: '0px 10px 20px #89CFF0'}} 
               alt="" height="100px" width="100px" initial = {{scale: 0.7}}></motion.img>
        </div>
        <div className='lower-content'>
            <h3 className='name'>Name</h3>
            <h1 className='pointsDis'>Points: </h1>
            <motion.h5 className='payment' whileHover={{scale: 1.5, boxShadow: '0px 10px 20px #89CFF0' }} onClick={payments} initial = {{scale: 1}}>Add payment method</motion.h5>
            
        </div>
    </div>
    </span>:
    <h1>Hello world</h1>
               }
    </div>

  )
}

export default Profile