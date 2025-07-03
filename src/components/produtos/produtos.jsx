import "./produtos.css";
import { produtosTodos } from "../../data/produtosTodos";
import { motion } from "framer-motion";
import CardsList from "../cardslist/cardslist";


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

      <CardsList
        produtos={produtosTodos}
        titulo=""
        subtitulo=""
        containerClass="container"
      />
    </section>
  );
};

export default Produtos;

