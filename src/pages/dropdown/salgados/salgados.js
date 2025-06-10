import React from "react";
import "./salgados.css";
import { produtosSalgados } from "../../../data/produtosSalgados"; // importa os dados
import CardsList from "../../../components/cardslist/cardslist";
import "../../../components/productcard/productcard.css"; // importa o CSS compartilhado

const Salgados = () => {
  return (
    <CardsList
      produtos={produtosSalgados}
      titulo="Salgados"
      subtitulo="os melhores lanches e pães de Mauá"
      containerClass="salgados"
    />
  );
};

export default Salgados;
