import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-overlay">
        <h1 className="boasvindas">
          Seja bem-vindo ao <span>Brazuka Doces.</span>
        </h1>
        <h1 className="slogan">Os melhores doces, do Brasil para Portugal</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
