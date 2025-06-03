import React from "react";
import "./produtos.css";

import { motion } from "framer-motion";

const Produtos = () => {
  return (
    <section id="produtos">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Os nossos melhores produtos para você se apaixonar
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Clique para informações e sabores
      </motion.h3>

      <motion.div
        className="button-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="paodemel button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PÃO DE MEL
        </motion.button>

        <motion.button
          className="brownie button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BROWNIE
        </motion.button>

        <motion.button
          className="bolodepote button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BOLO DE POTE
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Produtos;

