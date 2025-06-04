import React from "react";
import "./sabores.css";

const doces = [
  {
    nome: "Pão de Mel",
    sabores: ["Brigadeiro", "Doce de Leite", "Prestígio."],
    preco: "R$ 8,00"
  },
  {
    nome: "Cone Recheado",
    sabores: ["Tradicional", "Brigadeiro", "Leite em pó", "Maracujá", "Prestígio."],
    preco: "R$ 8,00"
  },
  {
    nome: "Bolo de Pote",
    sabores: ["Dois amores", "Napolitano", "Ameixa c/ coco", "Ninho c/ Nutella", "Prestígio", "Leite Ninho", "Ninho Morango", "Doce de leite c/ abacaxi", "Cenoura", "Ninho c/ abacaxi."],
    preco: "R$ 14,00"
  },
  {
    nome: "Brownie",
    sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite."],
    preco: "R$ 8,00"
  },
   {
    nome: "Geladinho Gourmet",
    sabores: ["Coco", "Maracujá", "Limonada suiça", "Morango", "Iogurte c/ geleia de morango", "Chocolate", "Manga."],
    preco: "R$ 6,00"
  }
];

// Exemplo para salgados, você pode adicionar os seus sabores
const salgados = [
  {
    nome: "Lanche Natural",
    sabores: ["Pernil", "Frango"],
    preco: "R$ 12,00"
  },
  {
    nome: "Pão Recheado",
    sabores: ["Presunto e Queijo"],
    preco: "1 por R$ 35,00 - 2 por R$ 65,00"
  },
  {
    nome: "Pão de Forma",
    sabores: ["600g"],
    preco: "R$ 25,00"
  }
];

const bolosConfeitados = [
  {
    nome: "Bolo de Morango",
    sabores: ["Morango com chantilly", "Morango com chocolate"],
    preco: "R$ 50,00"
  },
  {
    nome: "Bolo de Chocolate",
    sabores: ["Chocolate com brigadeiro", "Chocolate branco"],
    preco: "R$ 55,00"
  }
];

const Sabores = () => {
  return (
    <section id="sabores">
      <div className="tabelas-container">
        {/* Tabela doces */}
        <table className="tabela-produtos">
          <caption>Doces</caption>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Sabores</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {doces.map((doce, index) => (
              <tr key={index}>
                <td>{doce.nome}</td>
                <td>{doce.sabores.join(", ")}</td>
                <td>{doce.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabela salgados */}
        <table className="tabela-produtos">
          <caption>Salgados</caption>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Sabores</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {salgados.map((salgado, index) => (
              <tr key={index}>
                <td>{salgado.nome}</td>
                <td>{salgado.sabores.join(", ")}</td>
                <td>{salgado.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela bolos confeitados - centralizada e abaixo */}
      <div className="bolo-container">
        <table className="tabela-produtos bolo-tabela">
          <caption>Bolos Confeitados</caption>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sabores</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {bolosConfeitados.map((item, i) => (
              <tr key={i}>
                <td>{item.nome}</td>
                <td>{item.sabores.join(", ")}</td>
                <td>{item.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
   

export default Sabores;


