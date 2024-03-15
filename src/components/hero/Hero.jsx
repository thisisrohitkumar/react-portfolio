import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <span>
          <p>Hi, my name is</p>
          <h1>Rohit Kumar.</h1>
          <h2>
            I build things for the <em>web</em>.
          </h2>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) <br />
            exceptional digital experiences.
          </p>
          <div className="fixed-social-icons-mobile">
            <a href="https://github.com/thisisrohitkumar" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/thisisrohitkumar" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/thisisrohitkumar" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <a href="#project">View Projects</a>
        </span>
      </div>
    </>
  );
};

export default Hero;
