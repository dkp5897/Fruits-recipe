import React from 'react'
import './Front.css'
import { useNavigate } from "react-router-dom";


function Front() {
    const navigate = useNavigate()

    const clickHandler = (event)=>{
        event.preventDefault();
        navigate('/main')
    }
    return (
    <div className='front'>
      <div>
      <h1><strong>F</strong>ood<strong>R</strong>ecipe</h1>
      <h3>We are here to provide you special food and fruits recipe</h3>
      <button onClick={clickHandler} className='exp-btn'>Explore Noow</button>
      </div>
      <img src='fronts.png' alt='front-img'/>
    </div>
  )
}

export default Front
