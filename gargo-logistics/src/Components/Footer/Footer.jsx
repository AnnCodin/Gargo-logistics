import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-info">
        <div className="content-left">
          <img src={footer_logo} alt="" className="footer-logo" />
          <div className="left-items">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
              tincidunt fermentum ultrices faucibus sit pellentesque. Sit
              pellentesque adipiscing ipsum.
            </p>
            <div className="footer-icons">
              <i class="ri-youtube-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-twitter-fill"></i>
              <i class="ri-tiktok-fill"></i>
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="footer-col">
            <h4>quick links</h4>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Home
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              About Us
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Services
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Careers
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Contact Us
            </p>
          </div>
          <div className="footer-col">
            <h4>services</h4>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Road Transport
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Ocean Freight
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Air Freight
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Warehousing
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              Home Delivery
            </p>
            <p>
              <i className="ri-arrow-right-s-line"></i>
              More Services
            </p>
          </div>
          <div className="footer-col">
            <h4>information</h4>
            <div className="details">
              <i className="ri-phone-fill"></i>
              <div>
                <h5>phone</h5>
                <p>+123-234-1234</p>
              </div>
            </div>
            <div className="details">
              <i className="ri-mail-fill"></i>
              <div>
                <h5>email</h5>
                <p>info@gargoshipping.com</p>
              </div>
            </div>
            <div className="details">
              <i className="ri-map-pin-fill"></i>
              <div>
                <h5>address</h5>
                <p>99 Roving St, Bg City, PICU 23456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
