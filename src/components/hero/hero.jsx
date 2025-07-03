import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container overlay">
        <motion.div
          className="hero-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="boasvindas">
            Seja bem-vindo à <span>Castilhos.</span>
          </h1>
          <h2 className="slogan">Os melhores doces, da nossa casa para a sua!</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



