import React from "react";
import "./about.css"; // Import CSS

export default function About() {
  return (
    <section className="about-section">
      <p className="intro-text">Hi, my name is</p>
      <h1 className="main-name">Kundan Kumar.</h1>
      <h2 className="main-title">I build things for the web.</h2>
      <p className="description">
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products.
      </p>
      <a href="#" className="cta-button">Check out my work!</a>
    </section>
  );
}
