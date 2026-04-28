import React from "react";
import "./Services.css";
import choose_right from "../../assets/choose_right.jpg";

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services-content container">
        <p id="gap">
          Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
          tincidunt fermentum ultrices faucibus sit pellentesque. Sit
          pellentesque adipiscing ipsum{" "}
        </p>
        <div className="services-list">
          <div className="list-item">
            <i class="ri-truck-line" id="icon"></i>
            <h4>Road Transport</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="list-item">
            <i class="ri-ship-fill" id="icon"></i>
            <h4>Ocean Freight</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="list-item">
            <i class="ri-plane-line" id="icon"></i>
            <h4>Air Freight</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="list-item">
            <i class="ri-train-fill" id="icon"></i>
            <h4>Rail Transport</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
        </div>
        <div className="services-list">
          <div className="list-item">
            <i class="ri-store-3-fill" id="icon"></i>
            <h4>Warehousing</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="list-item">
            <i class="ri-e-bike-2-line" id="icon"></i>
            <h4>Home Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="list-item">
            <i class="ri-box-3-fill" id="icon"></i>
            <h4>Packaging</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="list-item">
            <i class="ri-map-pin-fill" id="icon"></i>
            <h4>Express Shipping</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum.
            </p>
            <a>
              Read More <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="logos">
        <i class="ri-apple-fill"></i>
        <i class="ri-twitter-x-fill"></i>
        <i class="ri-facebook-fill"></i>
        <i class="ri-messenger-fill"></i>
        <i class="ri-meta-fill"></i>
      </div>
      <div className="chooseus-wrapper">
        <div className="chooseus-content container">
          <div className="chooseus-left">
            <h3>why choose us</h3>
            <h4>modern logistics partner</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum ultrices faucibus sit pellentesque. Sit
              pellentesque adipiscing ipsum bibendum mollis parturient semper.
              Et fringilla in in interdum id aliquet tortor. Id est sit{" "}
            </p>
            <div class="skills-box">
              <div class="skill">
                <div class="skill-header">
                  <span>Shipping Knowledge</span>
                  <span>97%</span>
                </div>
                <div class="progress">
                  <div class="progress-fill1"></div>
                </div>
              </div>

              <div class="skill">
                <div class="skill-header">
                  <span>Worker Expertise</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-fill2"></div>
                </div>
              </div>

              <div class="skill">
                <div class="skill-header">
                  <span>On-Time Progress</span>
                  <span>93%</span>
                </div>
                <div class="progress">
                  <div class="progress-fill3"></div>
                </div>
              </div>

              <div class="skill">
                <div class="skill-header">
                  <span>Security Guarantee</span>
                  <span>96%</span>
                </div>
                <div class="progress">
                  <div class="progress-fill4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="chooseus-right">
            <div className="top-text">
              <div className="vision">
                <h4>our vision</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Massa nisl vel </p>
              </div>
              <div className="mission">
                <h4>our mission</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Massa nisl vel </p>
              </div>
            </div>
            <div className="image-container">
              <div class="choose-block"></div>
              <img src={choose_right} alt="Containers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
