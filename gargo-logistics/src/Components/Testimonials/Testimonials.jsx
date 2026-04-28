import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <p>
                “Lorem ipsum dolor sit amet consectetur. Faucibus cras maecenas
                commodo eu in id urna. Tortor sagittis malesuada enim vivamus
                bibendum. Arcu viverra ut aliquam consequat eu tristique tortor.
                Placerat tristique luctus elementum at consequat amet amet
                dignissim eget. Ultrices facilisis sed velit ut. Est aliquet
                facilisi vestibulum facilisi. Enim ut tempor nam dolor. Massa
                aliquet sed accumsan nulla. Porttitor nisl volutpat in
                pellentesque diam amet diam faucibus velit.”
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
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Jennifer Smith</h3>
                  <span>Beautician</span>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet consectetur. Faucibus cras maecenas
                commodo eu in id urna. Tortor sagittis malesuada enim vivamus
                bibendum. Arcu viverra ut aliquam consequat eu tristique tortor.
                Placerat tristique luctus elementum at consequat amet amet
                dignissim eget. Ultrices facilisis sed velit ut. Est aliquet
                facilisi vestibulum facilisi. Enim ut tempor nam dolor. Massa
                aliquet sed accumsan nulla. Porttitor nisl volutpat in
                pellentesque diam amet diam faucibus velit.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jennifer Smith</h3>
                  <span>Beautician</span>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet consectetur. Faucibus cras maecenas
                commodo eu in id urna. Tortor sagittis malesuada enim vivamus
                bibendum. Arcu viverra ut aliquam consequat eu tristique tortor.
                Placerat tristique luctus elementum at consequat amet amet
                dignissim eget. Ultrices facilisis sed velit ut. Est aliquet
                facilisi vestibulum facilisi. Enim ut tempor nam dolor. Massa
                aliquet sed accumsan nulla. Porttitor nisl volutpat in
                pellentesque diam amet diam faucibus velit.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jennifer Smith</h3>
                  <span>Beautician</span>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet consectetur. Faucibus cras maecenas
                commodo eu in id urna. Tortor sagittis malesuada enim vivamus
                bibendum. Arcu viverra ut aliquam consequat eu tristique tortor.
                Placerat tristique luctus elementum at consequat amet amet
                dignissim eget. Ultrices facilisis sed velit ut. Est aliquet
                facilisi vestibulum facilisi. Enim ut tempor nam dolor. Massa
                aliquet sed accumsan nulla. Porttitor nisl volutpat in
                pellentesque diam amet diam faucibus velit.”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
