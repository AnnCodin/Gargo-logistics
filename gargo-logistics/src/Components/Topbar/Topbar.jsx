import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar container">
        <div className="topbar-content">
          <div className="topbar-items">
            <i class="ri-mail-fill"></i>
            <p>info@gargoshipping.com</p>
          </div>
          <div className="topbar-items">
            <i class="ri-map-pin-line"></i>
            <p>99 Roving St, Big City, PICU 23454</p>
          </div>
          <div className="topbar-items">
            <i class="ri-time-line"></i>
            <p>Mon - Sat: 08:30 - 22:00</p>
          </div>
        </div>
        <div className="social-icons">
          <i class="ri-youtube-fill"></i>
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-tiktok-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
