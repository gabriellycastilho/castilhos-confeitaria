import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const aumentarQuantidade = (id, sabor) => {
  setCarrinho((prev) =>
    prev.map((item) =>
      item.id === id && item.sabor === sabor
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    )
  );
};

const diminuirQuantidade = (id, sabor) => {
  setCarrinho((prev) =>
    prev
      .map((item) =>
        item.id === id && item.sabor === sabor
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0) // remove se quantidade zero
  );
};

 const adicionarAoCarrinho = (produto) => {
  const precoStr = produto.preco?.toString().trim();
let precoNum = 0;

if (precoStr && precoStr.length > 0) {
  // Remove "R$", espaços, substitui vírgula por ponto
  const cleanStr = precoStr
    .replace("R$", "")
    .replace(/\s/g, "")
    .replace(",", ".");

  precoNum = parseFloat(cleanStr);
}

if (isNaN(precoNum)) {
  console.warn("Preço inválido, caindo para 0:", produto.preco);
  precoNum = 0;
}

  const quantidadeNum = produto.quantidade
    ? parseInt(produto.quantidade)
    : 1;

  const produtoFormatado = {
    ...produto,
    preco: isNaN(precoNum) ? 0 : precoNum,
    quantidade: isNaN(quantidadeNum) ? 1 : quantidadeNum,
  };

  setCarrinho((prev) => {
    const itemExistente = prev.find(
      (item) =>
        item.id === produtoFormatado.id && item.sabor === produtoFormatado.sabor
    );

    if (itemExistente) {
      return prev.map((item) =>
        item.id === produtoFormatado.id && item.sabor === produtoFormatado.sabor
          ? { ...item, quantidade: item.quantidade + produtoFormatado.quantidade }
          : item
      );
    } else {
      return [...prev, produtoFormatado];
    }
  });
};

  const removerDoCarrinho = (id, sabor) => {
    setCarrinho((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.sabor === sabor)
      )
    );
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};



