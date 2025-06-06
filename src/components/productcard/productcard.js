import React from "react";
import "./productcard.css";

const ProductCard = ({ produto, onAdicionar }) => {
  return (
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
  );
};

export default ProductCard;
