import React from "react";
import "./AboutUs.css";
import about_left from "../../assets/about_left.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="flip-cards container" id="aboutus">
        <div className="card">
          <i class="ri-phone-fill"></i>
          <div className="card-text">
            <h3>call center</h3>
            <div className="divider"></div>
            <p>Give Us a Free Call</p>
            <p>+123-234-1234</p>
          </div>
        </div>
        <div className="card">
          <i class="ri-home-9-fill"></i>
          <div className="card-text">
            <h3>Location</h3>
            <div className="divider"></div>
            <p>99 Roving St, Bg </p>
            <p>City, PICU 23456</p>
          </div>
        </div>
        <div className="blue-card">
          <div className="card-text">
            <h3>trace & track</h3>
            <div className="input-field">
              <input
                name="text"
                type="text"
                placeholder="Enter your tracking ID"
              />
              <i class="ri-search-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="aboutus-content container">
          <div className="aboutus-left">
            <div class="bottom-block"></div>
            <img src={about_left} alt="Containers" />
          </div>
          <div className="aboutus-right">
            <h3>about gargo</h3>
            <h4>Perfect Company with Perfect Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum ultrices faucibus sit pellentesque. Sit
              pellentesque adipiscing ipsum
            </p>
            <p>
              bibendum mollis parturient semper. Et fringilla in in interdum id
              aliquet tortor. Id est sit tellus risus erat nunc.
            </p>
            <div className="service-points">
              <div className="world-service">
                <i class="ri-global-line"></i>
                <div className="world-text">
                  <h4>world service</h4>
                  <p>Lorem ipsum dolor sit amet consectetur. Massa nisl vel </p>
                </div>
              </div>
              <div className="local-service">
                <i class="ri-map-pin-line"></i>
                <div className="world-text">
                  <h4>local service</h4>
                  <p>Lorem ipsum dolor sit amet consectetur. Massa nisl vel </p>
                </div>
              </div>
            </div>
            <button className="btn red-btn">more about us</button>
          </div>
        </div>
        <div className="numbers">
          <div className="number">
            <h3>
              587<span>k</span>
            </h3>
            <p>Delivered Goods</p>
          </div>
          <div className="number">
            <h3>
              80<span>+</span>
            </h3>
            <p>Countries Covered</p>
          </div>
          <div className="number">
            <h3>
              259<span>+</span>
            </h3>
            <p>Office Worldwide</p>
          </div>
          <div className="number">
            <h3>
              57,080<span>+</span>
            </h3>
            <p>Clients Satisfied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
