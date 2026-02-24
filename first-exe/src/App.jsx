import React from "react";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
// import Projects from "./Component/Projects/Projects";
import MyService from "./Component/MyService/MyService";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="Projects">
       <Projects/>
      </section> */}

      <section id="service">
        <MyService />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
