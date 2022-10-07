import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftNav">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/">
          <p>
            <span>F</span>ood<span>R</span>ecipe
          </p>
        </NavLink>
      </div>
      <div className="rightNav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
