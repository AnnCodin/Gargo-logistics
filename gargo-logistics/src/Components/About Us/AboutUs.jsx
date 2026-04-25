import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="flip-cards">
        <div className="card1">
          <i class="ri-phone-fill"></i>
          <div className="card1-text">
            <h3>call center</h3>
            <div className="divider"></div>
            <p>Give Us a Free Call</p>
            <p>+123-234-1234</p>
          </div>
        </div>
        <div className="card1">
          <i class="ri-home-9-fill"></i>
          <div className="card1-text">
            <h3>Location</h3>
            <div className="divider"></div>
            <p>99 Roving St, Bg </p>
            <p>City, PICU 23456</p>
          </div>
        </div>
        <div className="blue-card">
          <div className="card1-text">
            <h3>trace & track</h3>
            <div className="input-field">
              <input type="text" placeholder="Enter your tracking ID" />
              <i class="ri-search-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper"></div>
    </div>
  );
};

export default AboutUs;
