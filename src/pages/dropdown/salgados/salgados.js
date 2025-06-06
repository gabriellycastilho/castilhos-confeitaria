import React from "react";
import "./salgados.css";
import ProductCard from "../../../components/productcard/productcard";

// IMPORTAÇÃO DAS IMAGENS (coloque os arquivos em src/assets/images/)
import lancheNaturalImg from "../../../assets/images/lanchenatural.webp";
import lancheComboImg from "../../../assets/images/lanchenatural_combo.png";
import paoRecheadoImg from "../../../assets/images/paorecheado.jpg";
import paoDeFormaImg from "../../../assets/images/paodeforma.jpg";

const produtosSalgados = [
  {
    id: 1,
    nome: "Lanche Natural",
    sabores: ["Pernil", "Frango"],
    preco: "R$ 12,00",
    imagem: lancheNaturalImg,
  },
  {
    id: 2,
    nome: "Lanche + Coca-Cola",
    sabores: ["Pernil ou Frango + 1 Coca-Cola 350ml"],
    preco: "R$ 15,00",
    imagem: lancheComboImg,
  },
  {
    id: 3,
    nome: "Pão Recheado",
    sabores: ["Presunto", "Queijo"],
    preco: "R$ 35,00",
    imagem: paoRecheadoImg,
  },
  {
    id: 4,
    nome: "Pão de Forma (600g)",
    sabores: ["Tradicional"],
    preco: "R$ 25,00",
    imagem: paoDeFormaImg,
  },
];

const Salgados = () => {
  return (
    <div className="salgados-container">
      <h1 className="salgados-title">Salgados</h1>
      <div className="salgados-subtitle">
        os melhores lanches e pães de Mauá
      </div>

      <div className="salgados-cards-list">
        {produtosSalgados.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onAdicionar={() => console.log(`Adicionou: ${produto.nome}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Salgados;
