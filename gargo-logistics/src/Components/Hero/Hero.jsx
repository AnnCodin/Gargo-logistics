import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Empower Your Business with Better Logistics</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. At congue faucibus risus
          viverra porta. Elementum sit tortor tellus amet consectetur at varius
          in. Orci suspendisse cursus in justo adipiscing{" "}
        </p>
        <div className="hero-btns">
          <button className="btn blue-btn">get started</button>
          <button className="btn hero-btn">our services</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
