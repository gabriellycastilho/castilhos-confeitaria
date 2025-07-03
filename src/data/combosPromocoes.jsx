import cafeDaManhaImg from "../assets/images/combocafedamanha.jpg";
import brownieLoversImg from "../assets/images/brownielovers.jpg";
import lancheComboImg from "../assets/images/lanchenatural_combo.png";
import geladinhoPromoImg from "../assets/images/geladinhopromo.webp";
import coneebrownieImg from "../assets/images/coneebrowniepromo.avif";

export const combosPromocoes = [
  {
    id: 1,
    nome: "Combo Café da Manhã",
    sabores: ["1 Pão de Forma + 1 Geladinho Gourmet + 1 Lanche Natural"],
    preco: "R$ 38,00",
    imagem: cafeDaManhaImg,
  },
  {
    id: 2,
    nome: "Combo Brownie Lovers",
    sabores: ["2 Brownies P + 1 Brownie G"],
    preco: "R$ 30,00",
    imagem: brownieLoversImg,
  },
  {
    id: 3,
    nome: "Combo Fit & Saboroso",
    sabores: ["1 Lanche Natural + 1 Bolo de Pote + 1 Coca-Cola Zero 350ml"],
    preco: "R$ 32,00",
    imagem: lancheComboImg,
  },
  {
    id: 4,
    nome: "Promo Lanche + Coca",
    sabores: ["Na compra do lanche, leve a Coca-Cola 350ml por só R$ 3,00!"],
    validoAte: "30/06/2025",
    preco: "R$ 15,00",
    imagem: lancheComboImg,
  },
  {
    id: 5,
    nome: "3 Geladinhos por 15",
    sabores: ["Leve 3 Geladinhos Gourmet variados por R$ 15,00"],
    validoAte: "30/06/2025",
    preco: "R$ 15,00",
    imagem: geladinhoPromoImg,
  },
  {
    id: 6,
    nome: "Brownie na Faixa",
    sabores: ["Compre 2 cones recheados e ganhe 1 Brownie tamanho P!"],
    preco: "R$ 16,00",
    imagem: coneebrownieImg,
  },
];


