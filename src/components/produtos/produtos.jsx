// frontend/src/components/produtos/produtos.jsx
import "./produtos.css";
import { motion } from "framer-motion";
import CardsList from "../cardslist/cardslist";
import { useState, useEffect } from "react";
import axios from "axios";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5001/produtos")
      .then((res) => {
        // filtra só os DOCES para exibir na home
        const doces = res.data.filter((p) => p.categoria === "doces");
        setProdutos(doces);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="produtos">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Carregando nossos melhores produtos...
        </motion.h2>
      </section>
    );
  }

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

      {/* Usa o mesmo CardsList que já funciona nas páginas */}
      <CardsList
        produtos={produtos}
        titulo=""
        subtitulo=""
        containerClass="container"
      />
    </section>
  );
};

export default Produtos;


