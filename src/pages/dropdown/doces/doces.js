import React from "react";
import "./doces.css";

const Doces = () => {
    return (
  <div className="doces-container">
      <h1 className="doces-title">Doces</h1>

      {/* “Botão” não clicável */}
      <div className="doces-subtitle">
        os melhores docinhos de Mauá
      </div>

      {/* Espaço reservado para os cards */}
      <div className="doces-cards-list">
        {/*  map em um array de objetos para criar cada card */}
      </div>
    </div>
    )
}

export default Doces;