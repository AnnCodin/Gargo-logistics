import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25565.986330251828!2d-76.12249595124091!3d36.776605436901946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s99%20Roving%20St%2C%20Big%20City%2C%20PICU%2023454!5e0!3m2!1sen!2sgh!4v1777402108258!5m2!1sen!2sgh"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>
      <div className="contact-info">
        <h3>Get In Touch</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
          tincidunt fermentum ultrices faucibus sit pellentesque. Sit
          pellentesque adipiscing{" "}
        </p>
        <div className="contact-box">
          <div className="contact">
            <i class="ri-phone-fill"></i>
            <div>
              <h4>Phone</h4>
              <p>+123-234-1234</p>
            </div>
          </div>
          <div className="contact">
            <i class="ri-mail-fill"></i>
            <div>
              <h4>Email</h4>
              <p>info@gargoshipping.com</p>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact">
            <i class="ri-global-fill"></i>
            <div>
              <h4>Website</h4>
              <p>www.gargo.com</p>
            </div>
          </div>
          <div className="contact">
            <i class="ri-map-pin-fill"></i>
            <div>
              <h4>Address</h4>
              <p>99 Roving St, Bg City, PICU 23456</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="icons">
          <i class="ri-youtube-fill"></i>
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-tiktok-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
