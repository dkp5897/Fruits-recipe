import React from 'react'
import './Contact.css'
import {useNavigate} from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <div>
        
      <h1>Please provide these informations to contact us</h1>
        <div className="contactform">
        <form>
            <div className="yourname">
              Name:
              <input type="text" className="form-control" id="myNmae"placeholder="Enter Your Name"/>
            </div>
            <div className="email">
              Email address:
              <input type="email" className="form-control" id="mail1"placeholder="Enter Your Email"/>
            </div>
            <div className="phone">
              Phone Number:
              <input type="number" className="form-control" id="phone" placeholder="Phone number"/>
            </div>
            <div className='btns'>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button onClick={()=>navigate('/')}>Back</button>
            </div>
          </form>
          </div>
    </div>
  )
}

export default Contact
