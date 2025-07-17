import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  // Aumenta quantidade (usado apenas para produtos "normais", não bolos)
  const aumentarQuantidade = (id, sabor) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id && item.sabor === sabor
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  // Diminui quantidade, removendo o item se chegar a zero
  const diminuirQuantidade = (id, sabor) => {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.id === id && item.sabor === sabor
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  // Adiciona um produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    // Para bolos, já calculamos precoTotal antes (kilos * valor do kg)
    const precoString = produto.precoTotal
      ? produto.precoTotal.toString()
      : produto.preco?.toString().trim() ?? "0";

    // Converte preço string → número (remove R$, vírgula, espaços)
    const precoNum = parseFloat(
      precoString.replace("R$", "").replace(/\s/g, "").replace(",", ".")
    );

    // Converte quantidade → número
    const quantidadeNum = produto.quantidade ? parseInt(produto.quantidade) : 1;

    const produtoFormatado = {
      ...produto,
      preco: isNaN(precoNum) ? 0 : precoNum,
      quantidade: isNaN(quantidadeNum) ? 1 : quantidadeNum,
    };

    setCarrinho((prev) => {
      let itemExistente;

      if (produto.tipo === "bolo") {
        // PARA BOLOS: itens são únicos por recheio + massa + kilos
        // (ou seja, se o usuário muda qualquer detalhe, vira outro item)
        itemExistente = prev.find(
          (item) =>
            item.tipo === "bolo" &&
            item.recheio === produtoFormatado.recheio &&
            item.massa === produtoFormatado.massa &&
            item.quantidade === produtoFormatado.quantidade
        );
      } else {
        // 🍬 PARA DOCES/SALGADOS/CESTAS: diferencia apenas por id + sabor
        itemExistente = prev.find(
          (item) =>
            item.id === produtoFormatado.id &&
            item.sabor === produtoFormatado.sabor
        );
      }

      // Se já existe (mesmo produto exato) → apenas soma quantidade
      if (itemExistente) {
        return prev.map((item) =>
          item === itemExistente
            ? {
                ...item,
                quantidade: item.quantidade + produtoFormatado.quantidade,
              }
            : item
        );
      } else {
        // Caso contrário, adiciona como novo item no carrinho
        return [...prev, produtoFormatado];
      }
    });
  };

  // ❌ Remove item do carrinho
  const removerDoCarrinho = (id, sabor) => {
    setCarrinho((prev) =>
      prev.filter((item) => !(item.id === id && item.sabor === sabor))
    );
  };

  // Limpa todo o carrinho
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




