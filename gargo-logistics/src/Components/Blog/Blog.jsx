import React from "react";
import "./Blog.css";
import blog_1 from "../../assets/blog-1.png";
import blog_2 from "../../assets/blog-2.png";

const Blog = () => {
  return (
    <div className="blog-wrapper container" id="blog">
      <div className="blog-content">
        <div className="blog-right">
          <div>
            <img src={blog_1} alt="" />
            <div className="blog-post">
              <h4>The Future of Freight Dispatch Technology</h4>
              <p>....January 23, 2026</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
                tincidunt fermentum ultrices
              </p>
              <h4>READ MORE</h4>
            </div>
          </div>
          <div>
            <img src={blog_2} alt="" />
            <div className="blog-post">
              <h4>Transportation and Logistics: The Next Platform</h4>
              <p>....January 26, 2026</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
                tincidunt fermentum ultrices
              </p>
              <h4>READ MORE</h4>
            </div>
          </div>
        </div>
        <div className="blog-left">
          <p>OUR BLOG</p>
          <h3>Blog & Articles</h3>
          <p id="blog-text">
            Lorem ipsum dolor sit amet consectetur. Sapien donec risus erat
            tincidunt fermentum ultrices faucibus sit pellentesque. Sit
            pellentesque adipiscing ipsum{" "}
          </p>
          <p id="blog-text">
            bibendum mollis parturient semper. Et fringilla in in interdum id
            aliquet tortor. Id est sit tellus risus erat nunc.{" "}
          </p>
          <button className="btn red-btn">MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
