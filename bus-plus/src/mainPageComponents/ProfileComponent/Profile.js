import React from 'react'

function Profile() {
  return (
    <div className='card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src = "./profPic.png" alt="" height="100px" width="100px"/>
            </div>
        </div>
        <div className='lower-content'>
            <h3>Name</h3>
            <h1>Points</h1>
            <h5>Add payment method</h5>
        </div>
    </div>
  )
}

export default Profile