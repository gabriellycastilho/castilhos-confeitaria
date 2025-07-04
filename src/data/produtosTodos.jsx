import paoDeMelImg from "../assets/images/paodemelsabores.jpg";
import coneRecheadoImg from "../assets/images/conerecheadocard.jpg.webp";
import boloDePoteImg from "../assets/images/bolodepotebutton.jpe";
import brownieImg from "../assets/images/browniebutton.jpg.webp";
import geladinhoImg from "../assets/images/geladinhogourmetcard.jpeg";
import lancheNaturalImg from "../assets/images/lanchenatural.jpg.webp";
import lancheComboImg from "../assets/images/lanchenatural_combo.png";
import paoRecheadoImg from "../assets/images/paorecheado.jpg";
import paoDeFormaImg from "../assets/images/paodeforma.jpg";

export const produtosTodos = [
  // Doces com tipo
  {
    id: 1,
    nome: "Pão de Mel",
    sabores: ["Brigadeiro", "Doce de Leite", "Prestígio."],
    preco: "R$ 8,00",
    imagem: paoDeMelImg,
    tipo: "doce",
  },
  {
    id: 2,
    nome: "Cone Recheado",
    sabores: ["Tradicional", "Brigadeiro", "Leite em pó", "Maracujá", "Prestígio."],
    preco: "R$ 8,00",
    imagem: coneRecheadoImg,
    tipo: "doce",
  },
  {
    id: 3,
    nome: "Bolo de Pote",
    sabores: [
      "Dois amores",
      "Napolitano",
      "Ameixa c/ coco",
      "Ninho c/ Nutella",
      "Prestígio",
      "Leite Ninho",
      "Ninho Morango",
      "Doce de leite c/ abacaxi",
      "Cenoura",
      "Ninho c/ abacaxi.",
    ],
    preco: "R$ 14,00",
    imagem: boloDePoteImg,
    tipo: "doce",
  },
  {
    id: 4,
    nome: "Brownie Tamanho P",
    sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite."],
    preco: "R$ 10,00",
    imagem: brownieImg,
    tipo: "doce",
  },
  {
    id: 5,
    nome: "Brownie Tamanho G",
    sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite."],
    preco: "R$ 15,00",
    imagem: brownieImg,
    tipo: "doce",
  },
  {
    id: 6,
    nome: "Geladinho Gourmet",
    sabores: [
      "Coco",
      "Maracujá",
      "Limonada suiça",
      "Morango",
      "Iogurte c/ geleia de morango",
      "Chocolate",
      "Manga.",
    ],
    preco: "R$ 6,00",
    imagem: geladinhoImg,
    tipo: "doce",
  },

  // Salgados com tipo
  {
    id: 101,
    nome: "Lanche Natural",
    sabores: ["Pernil", "Frango"],
    preco: "R$ 12,00",
    imagem: lancheNaturalImg,
    tipo: "salgado",
  },
  {
    id: 102,
    nome: "Lanche + Coca-Cola",
    sabores: ["Pernil ou Frango + 1 Coca-Cola 350ml"],
    preco: "R$ 15,00",
    imagem: lancheComboImg,
    tipo: "salgado",
  },
  {
    id: 103,
    nome: "Pão Recheado",
    sabores: ["Presunto", "Queijo"],
    preco: "R$ 35,00",
    imagem: paoRecheadoImg,
    tipo: "salgado",
  },
  {
    id: 104,
    nome: "Pão de Forma (600g)",
    sabores: ["Tradicional"],
    preco: "R$ 25,00",
    imagem: paoDeFormaImg,
    tipo: "salgado",
  },
];
