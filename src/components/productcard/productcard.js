import "./productcard.css";

import { motion } from "framer-motion";

const ProductCard = ({ produto, onAdicionar }) => {
  return (
     <motion.div
      className="product-card-motion"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <div className="product-card">
      <h3 className="product-card-nome">{produto.nome}</h3>
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="product-card-img"
      />

      <ul className="product-card-sabores">
        {produto.sabores.map((sabor, index) => (
          <li key={index}>{sabor}</li>
        ))}
      </ul>

      <div className="product-card-footer">
        <p className="product-card-preco">{produto.preco}</p>
        <button
          className="product-card-botao"
          onClick={onAdicionar}
        >
          Adicionar ao pedido
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default ProductCard;
