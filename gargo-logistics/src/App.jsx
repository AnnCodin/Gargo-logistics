import React from "react";
import Topbar from "./Components/Topbar/Topbar.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutUs from "./Components/About Us/AboutUs.jsx";
import Title from "./Components/Title/Title.jsx";
import Services from "./Components/Services/Services.jsx";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <AboutUs />
      <Title subTitle="our service" title="what we can do for you" />
      <Services />
    </div>
  );
};

export default App;
