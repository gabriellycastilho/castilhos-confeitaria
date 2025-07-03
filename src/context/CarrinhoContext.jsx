import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      // Verifica se o produto com o mesmo id E mesmo sabor já está no carrinho
      const itemExistente = prev.find(
        (item) => item.id === produto.id && item.sabor === produto.sabor
      );

      let novoCarrinho;

      if (itemExistente) {
        // Se já existe esse sabor, só soma a quantidade
        novoCarrinho = prev.map((item) =>
          item.id === produto.id && item.sabor === produto.sabor
            ? { ...item, quantidade: item.quantidade + produto.quantidade }
            : item
        );
      } else {
        // Senão, adiciona como item novo
        novoCarrinho = [...prev, { ...produto }];
      }

      console.log("Carrinho agora:", novoCarrinho);

      return novoCarrinho;
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
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

