import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [check3, setcheck3] = useState(false);

  const changeHnadler1 = () => {
    setcheck1(true);
  };
  const changeHnadler2 = () => {
    setcheck2(true);
  };
  const changeHnadler3 = () => {
    setcheck3(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (check1 && check2 && check3) {
      navigate("/submitted");
    } else {
      alert("please provide information");
    }
  };

  return (
    <div>
      <h1>Please provide these informations to contact us</h1>
      <div className="contactform">
        <form>
          <div className="yourname">
            Name:
            <input
              type="text"
              className="form-control"
              id="myNmae"
              placeholder="Enter Your Name"
              onChange={changeHnadler1}
              required
            />
          </div>
          <div className="email">
            Email address:
            <input
              type="email"
              className="form-control"
              id="mail1"
              placeholder="Enter Your Email"
              onChange={changeHnadler2}
              required
            />
          </div>
          <div className="phone">
            Phone Number:
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Phone number"
              onChange={changeHnadler3}
              required
            />
          </div>
          <div className="btns">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
