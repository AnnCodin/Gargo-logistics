import React from "react";
import "./Pages.css";
import goods_1 from "../../assets/goods-1.png";
import goods_2 from "../../assets/goods-2.png";
import goods_3 from "../../assets/goods-3.png";
import goods_4 from "../../assets/goods-4.png";
import goods_5 from "../../assets/goods-5.png";
import goods_6 from "../../assets/goods-6.png";

const Pages = () => {
  return (
    <div className="goods-wrapper container">
      <p>
        Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
        tincidunt fermentum ultrices faucibus sit pellentesque. Sit pellentesque
        adipiscing ipsum{" "}
      </p>
      <div className="gallery-container">
        <div className="gallery">
          <img src={goods_1} alt="" />
        </div>
        <div className="gallery">
          <img src={goods_2} alt="" />
        </div>
        <div className="gallery">
          <img src={goods_3} alt="" />
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          <img src={goods_4} alt="" />
        </div>
        <div className="gallery">
          <img src={goods_5} alt="" />
        </div>
        <div className="gallery">
          <img src={goods_6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pages;
