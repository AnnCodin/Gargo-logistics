import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "./Navbar.css";
import site_logo from "../../assets/gargo_logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={site_logo} alt="Site Logo" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="aboutus" smooth={true} offset={100} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-250} duration={500}>
            Services <i class="ri-arrow-down-s-line"></i>
          </Link>
        </li>
        <li>
          <Link to="pages" smooth={true} offset={-250} duration={500}>
            Pages <i class="ri-arrow-down-s-line"></i>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-430} duration={500}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="blog" smooth={true} offset={-140} duration={500}>
            Blog <i class="ri-arrow-down-s-line"></i>
          </Link>
        </li>
      </ul>
      <button className="btn red-btn">
        <Link to="contact" smooth={true} offset={-430} duration={500}>
          get a quote
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
