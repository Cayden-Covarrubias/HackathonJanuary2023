import React from 'react'
import CheckIn from './CheckIn';
import ProgressGuage from './ProgressGuage';
import Redeem from './Redeem';
//import Scan from './Scan';
function Navbar() {

    const list = ["Book","Home", "information"];
  return (
    <div>
    <ProgressGuage/>
    <CheckIn/>
    <Redeem/>
       <ul>
        {list.map((listData)=>{return(<li key = {listData}>{listData}</li>)})}
       </ul>
    </div>
  )
}

export default Navbar