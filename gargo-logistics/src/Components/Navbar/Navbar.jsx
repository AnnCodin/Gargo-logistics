import React from "react";
import "./Navbar.css";
import site_logo from "../../assets/gargo_logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={site_logo} alt="Site Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>
          Services <i class="ri-arrow-down-s-line"></i>
        </li>
        <li>
          Pages <i class="ri-arrow-down-s-line"></i>
        </li>
        <li>Contact Us</li>
        <li>
          Blog <i class="ri-arrow-down-s-line"></i>
        </li>
      </ul>
      <button className="btn red-btn">get a quote</button>
    </nav>
  );
};

export default Navbar;
