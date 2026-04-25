import React from "react";
import Topbar from "./Components/Topbar/Topbar.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutUs from "./Components/About Us/AboutUs.jsx";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <div className="container">
        <AboutUs />
      </div>
    </div>
  );
};

export default App;
