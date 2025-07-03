// src/pages/pedido/pedido.js
import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Pedido = () => {
  const { carrinho, removerDoCarrinho, limparCarrinho } = useContext(CarrinhoContext);

  const total = carrinho.reduce(
    (acc, item) => acc + Number(item.preco) * item.quantidade,
    0
  );

  if (carrinho.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h1>Seu Pedido</h1>
      <ul>
        {carrinho.map((item) => (
          <li key={item.id}>
            {item.nome} - {item.quantidade} x R$ {Number(item.preco).toFixed(2)} = R$ {(Number(item.preco) * item.quantidade).toFixed(2)}
            <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h2>Total: R$ {total.toFixed(2)}</h2>
      <button onClick={limparCarrinho}>Limpar pedido</button>
      <button onClick={() => alert("Pedido finalizado! (função a implementar)")}>
        Finalizar pedido
      </button>
    </div>
  );
};

export default Pedido;

