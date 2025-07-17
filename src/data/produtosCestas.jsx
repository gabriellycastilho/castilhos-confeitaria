import cestaCafeImg from "../assets/images/cesta1.jpeg";
import cestaNamoradosImg from "../assets/images/cesta2.jpeg";
import cestaChocolatesImg from "../assets/images/cesta3.jpeg";
import cestaPersonalizadaImg from "../assets/images/cesta4.jpeg";

export const produtosCestas = [
  {
    id: 1,
    nome: "Cesta de Café da Manhã",
    itens: [
      "Pães variados",
      "Frutas",
      "Bolo caseiro",
      "Sucos e café",
      "Geleias e frios",
    ],
    preco: "R$ 120,00",
    imagem: cestaCafeImg,
  },
  {
    id: 2,
    nome: "Cesta Romântica (Dia dos Namorados)",
    itens: [
      "Chocolates finos",
      "Vinho",
      "Doces personalizados",
      "Flores",
      "Cartão com mensagem",
    ],
    preco: "R$ 160,00",
    imagem: cestaNamoradosImg,
  },
  {
    id: 3,
    nome: "Cesta de Chocolates",
    itens: [
      "Trufas",
      "Pães de mel",
      "Brigadeiros",
      "Tabletes recheados",
      "Coração de chocolate",
    ],
    preco: "R$ 140,00",
    imagem: cestaChocolatesImg,
  },
  {
    id: 4,
    nome: "Cesta Personalizada",
    itens: [
      "Você escolhe tudo!",
      "Pode incluir doces, bebidas, pelúcias e mimos variados",
    ],
    preco: "A partir de R$ 100,00",
    imagem: cestaPersonalizadaImg,
  },
];
