// backend/produtos.js

const produtos = [
  // ============================
  // DOCES
  // ============================
  {
    id: 1,
    nome: "Pão de Mel",
    categoria: "doces",
    preco: 8.00,
    imagem: "paodemelsabores.jpg",
    detalhes: {
      sabores: ["Brigadeiro", "Doce de Leite", "Prestígio"]
    }
  },
  {
    id: 2,
    nome: "Cone Recheado",
    categoria: "doces",
    preco: 8.00,
    imagem: "conerecheadocard.jpg.webp",
    detalhes: {
      sabores: ["Tradicional", "Brigadeiro", "Leite em pó", "Maracujá", "Prestígio"]
    }
  },
  {
    id: 3,
    nome: "Bolo de Pote",
    categoria: "doces",
    preco: 14.00,
    imagem: "bolodepotebutton.jpe",
    detalhes: {
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
        "Ninho c/ abacaxi"
      ]
    }
  },
  {
    id: 4,
    nome: "Brownie Tamanho P",
    categoria: "doces",
    preco: 10.00,
    imagem: "browniebutton.jpg.webp",
    detalhes: {
      sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite"]
    }
  },
  {
    id: 5,
    nome: "Brownie Tamanho G",
    categoria: "doces",
    preco: 15.00,
    imagem: "browniebutton.jpg.webp",
    detalhes: {
      sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite"]
    }
  },
  {
    id: 6,
    nome: "Geladinho Gourmet",
    categoria: "doces",
    preco: 6.00,
    imagem: "geladinhogourmetcard.jpeg",
    detalhes: {
      sabores: [
        "Coco",
        "Maracujá",
        "Limonada suiça",
        "Morango",
        "Iogurte c/ geleia de morango",
        "Chocolate",
        "Manga"
      ]
    }
  },

  // ============================
  // SALGADOS
  // ============================
  {
    id: 101,
    nome: "Lanche Natural",
    categoria: "salgados",
    preco: 12.00,
    imagem: "lanchenatural.jpg.webp",
    detalhes: {
      sabores: ["Pernil", "Frango"]
    }
  },
  {
    id: 102,
    nome: "Lanche + Coca-Cola",
    categoria: "salgados",
    preco: 15.00,
    imagem: "lanchenatural_combo.png",
    detalhes: {
      sabores: ["Pernil ou Frango + 1 Coca-Cola 350ml"]
    }
  },
  {
    id: 103,
    nome: "Pão Recheado",
    categoria: "salgados",
    preco: 35.00,
    imagem: "paorecheado.jpg",
    detalhes: {
      sabores: ["Presunto", "Queijo"]
    }
  },
  {
    id: 104,
    nome: "Pão de Forma (600g)",
    categoria: "salgados",
    preco: 25.00,
    imagem: "paodeforma.jpg",
    detalhes: {
      sabores: ["Tradicional"]
    }
  },
  // ============================
  // PROMOÇÕES
  // ============================
  {
    id: 401,
    nome: "Combo Café da Manhã",
    categoria: "promocoes",
    preco: 38.00,
    imagem: "combocafedamanha.jpg",
    detalhes: {
      sabores: ["1 Pão de Forma + 1 Geladinho Gourmet + 1 Lanche Natural"]
    }
  },
  {
    id: 402,
    nome: "Combo Brownie Lovers",
    categoria: "promocoes",
    preco: 30.00,
    imagem: "brownielovers.jpg",
    detalhes: {
      sabores: ["2 Brownies P + 1 Brownie G"]
    }
  },
  {
    id: 403,
    nome: "Combo Fit & Saboroso",
    categoria: "promocoes",
    preco: 32.00,
    imagem: "lanchenatural_combo.png",
    detalhes: {
      sabores: ["1 Lanche Natural + 1 Bolo de Pote + 1 Coca-Cola Zero 350ml"]
    }
  },
  {
    id: 404,
    nome: "Promo Lanche + Coca",
    categoria: "promocoes",
    preco: 15.00,
    imagem: "lanchenatural_combo.png",
    detalhes: {
      sabores: ["Na compra do lanche, leve a Coca-Cola 350ml por só R$ 3,00!"],
      validoAte: "30/06/2025"
    }
  },
  {
    id: 405,
    nome: "3 Geladinhos por 15",
    categoria: "promocoes",
    preco: 15.00,
    imagem: "geladinhopromo.webp",
    detalhes: {
      sabores: ["Leve 3 Geladinhos Gourmet variados por R$ 15,00"],
      validoAte: "30/06/2025"
    }
  },
  {
    id: 406,
    nome: "Brownie na Faixa",
    categoria: "promocoes",
    preco: 16.00,
    imagem: "coneebrowniepromo.avif",
    detalhes: {
      sabores: ["Compre 2 cones recheados e ganhe 1 Brownie tamanho P!"]
    }
  }
];

module.exports = produtos;
