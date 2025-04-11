import React from "react";
import "./produtos.css";

const Produtos = () => {
  return (
    <div>
      <section id="produtos">
        <h2>Os nossos melhores produtos para você se apaixonar</h2>
        <h3>Clique para informações e sabores</h3>
        <div className="button-container">
          <button className="paodemel button">PÃO DE MEL</button>
          <button className="brownie button">BROWNIE</button>
          <button className="bolodepote button">BOLO DE POTE</button>
        </div>
      </section>
    </div>
  );
};

export default Produtos;