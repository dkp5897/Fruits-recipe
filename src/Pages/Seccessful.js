import React from 'react'
import {useNavigate} from 'react-router-dom'

function Seccessful() {
    const box = {
        display:"flex",
        flexDirection:"column",
        margin:"auto"
    }

    const btn = {
        width:"250px",
        height:"80px",
        margin:"auto",
        fontSize:"30px"
    }

    const navigate = useNavigate()
  return (
    <div style={box}>
      <h1>Successfully Submitted!</h1>
      <button style={btn} onClick={()=>navigate('/')}>Back</button>
    </div>
  )
}

export default Seccessful
