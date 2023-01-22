import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Gauge() {
  const percentage = 66;
  return (
    <div>
    <CircularProgressbar value={percentage} text = {`${650} PTS`}/>
    </div>
  )
}

export default Gauge