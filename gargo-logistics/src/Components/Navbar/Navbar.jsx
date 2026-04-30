import React, { useEffect, useState } from "react";
import "./Navbar.css";
import site_logo from "../../assets/gargo_logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="container">
      <img src={site_logo} alt="Site Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
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
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
