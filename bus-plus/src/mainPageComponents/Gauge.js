import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Gauge() {
  const percentage = 66;
  return (
    <div>
    <CircularProgressbar value={percentage} text = {`${650} PTS`} styles = {buildStyles({
      pathColor: '#FFA500',
      textColor: '#FFA500',
      trailColor: '#FFD659' 
    })}/>
    </div>
  )
}

export default Gauge