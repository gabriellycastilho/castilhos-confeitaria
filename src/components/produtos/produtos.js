import "./produtos.css";
import { produtosDoces } from "../../data/produtosDoces";
import ProductCard from "../productcard/productcard";

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
        className="cards-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
      >
        {produtosDoces.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Produtos;
