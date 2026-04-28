import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -75) {
      tx.current -= 25;
    }

    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }

    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials container">
        <img src={next_icon} className="next-btn" onClick={slideForward} />
        <img src={back_icon} className="back-btn" onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <p>
                  “Lorem ipsum dolor sit amet consectetur. Faucibus cras
                  maecenas commodo eu in id urna. Tortor sagittis malesuada enim
                  vivamus bibendum. Arcu viverra ut aliquam consequat eu
                  tristique tortor. Placerat tristique luctus elementum at
                  consequat amet amet dignissim eget. Ultrices facilisis sed
                  velit ut. Est aliquet facilisi vestibulum facilisi. Enim ut
                  tempor nam dolor. Massa aliquet sed accumsan nulla. Porttitor
                  nisl volutpat in pellentesque diam amet diam faucibus velit.”
                </p>
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Jennifer Smith</h3>
                    <span>Beautician</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <p>
                  “Lorem ipsum dolor sit amet consectetur. Faucibus cras
                  maecenas commodo eu in id urna. Tortor sagittis malesuada enim
                  vivamus bibendum. Arcu viverra ut aliquam consequat eu
                  tristique tortor. Placerat tristique luctus elementum at
                  consequat amet amet dignissim eget. Ultrices facilisis sed
                  velit ut. Est aliquet facilisi vestibulum facilisi. Enim ut
                  tempor nam dolor. Massa aliquet sed accumsan nulla. Porttitor
                  nisl volutpat in pellentesque diam amet diam faucibus velit.”
                </p>
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Jennifer Smith</h3>
                    <span>Beautician</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <p>
                  “Lorem ipsum dolor sit amet consectetur. Faucibus cras
                  maecenas commodo eu in id urna. Tortor sagittis malesuada enim
                  vivamus bibendum. Arcu viverra ut aliquam consequat eu
                  tristique tortor. Placerat tristique luctus elementum at
                  consequat amet amet dignissim eget. Ultrices facilisis sed
                  velit ut. Est aliquet facilisi vestibulum facilisi. Enim ut
                  tempor nam dolor. Massa aliquet sed accumsan nulla. Porttitor
                  nisl volutpat in pellentesque diam amet diam faucibus velit.”
                </p>
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Jennifer Smith</h3>
                    <span>Beautician</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <p>
                  “Lorem ipsum dolor sit amet consectetur. Faucibus cras
                  maecenas commodo eu in id urna. Tortor sagittis malesuada enim
                  vivamus bibendum. Arcu viverra ut aliquam consequat eu
                  tristique tortor. Placerat tristique luctus elementum at
                  consequat amet amet dignissim eget. Ultrices facilisis sed
                  velit ut. Est aliquet facilisi vestibulum facilisi. Enim ut
                  tempor nam dolor. Massa aliquet sed accumsan nulla. Porttitor
                  nisl volutpat in pellentesque diam amet diam faucibus velit.”
                </p>
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Jennifer Smith</h3>
                    <span>Beautician</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="goods">
        <div className="goods-info">
          <h3>
            Confused About Choosing The Right Shipping Service for Your Goods?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
            tincidunt fermentum ultrices faucibus sit pellentesque. Sit
            pellentesque adipiscing ipsum .
          </p>
          <button className="btn red-btn">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
