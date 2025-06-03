import React from "react";
import "./hero.css";
import { motion } from 'framer-motion';
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-overlay">
          <motion.h1
            className="boasvindas"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Seja bem-vindo ao <span>Castilhos.</span>
          </motion.h1>

          <motion.h1
            className="slogan"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typewriter
              words={["Os melhores doces, da nossa casa para a sua!"]}
              loop={0} // loop infinito
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
