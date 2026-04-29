import React from "react";
import Topbar from "./Components/Topbar/Topbar.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutUs from "./Components/About Us/AboutUs.jsx";
import Title from "./Components/Title/Title.jsx";
import Services from "./Components/Services/Services.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Pages from "./Components/Pages/Pages.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Blog from "./Components/Blog/Blog.jsx";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <AboutUs />
      <Title subTitle="our service" title="what we can do for you" />
      <Services />
      <Testimonials />
      <Title subTitle="types of goods" title="we are a safe shipper" />
      <Pages />
      <Contact />
      <Blog />
    </div>
  );
};

export default App;
