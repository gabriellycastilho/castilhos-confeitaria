import lancheNaturalImg from "../assets/images/lanchenatural.jpg.webp";
import lancheComboImg from "../assets/images/lanchenatural_combo.png";
import paoRecheadoImg from "../assets/images/paorecheado.jpg";
import paoDeFormaImg from "../assets/images/paodeforma.jpg";

export const produtosSalgados = [
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