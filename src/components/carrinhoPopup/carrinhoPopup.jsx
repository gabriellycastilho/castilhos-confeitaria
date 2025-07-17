import { useContext, useState } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { FaShoppingCart } from "react-icons/fa";
import "./carrinhoPopup.css";

const CarrinhoPopup = () => {
  const {
    carrinho,
    removerDoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho,
  } = useContext(CarrinhoContext);
  const [aberto, setAberto] = useState(false);
  const [finalizou, setFinalizou] = useState(false);

  const togglePopup = () => {
    setAberto(!aberto);
  };

  // Calcula total do carrinho
  const totalCarrinho = carrinho.reduce(
    (acc, item) => acc + Number(item.preco) * item.quantidade,
    0
  );

  // Monta a mensagem para o WhatsApp com o pedido formatado
  const montarMensagemWhatsApp = () => {
    if (carrinho.length === 0) return "Olá, quero fazer um pedido.";

    let mensagem = "Olá, quero fazer um pedido:\n";
    carrinho.forEach((item, i) => {
      mensagem += `${i + 1}. ${item.nome}`;
      if (item.sabor) mensagem += ` (${item.sabor})`;
      if (item.tipo === "bolo") {
        mensagem += ` - Recheio: ${item.recheio}, Massa: ${item.massa}, Kilos: ${item.quantidade}`;
      } else {
        mensagem += ` - Quantidade: ${item.quantidade}`;
      }
      mensagem += `\n`;
    });
    mensagem += `Total: R$ ${totalCarrinho.toFixed(2)}`;
    return encodeURIComponent(mensagem);
  };

  const numeroWhatsApp = "5511976141427"; 

  const finalizarPedido = () => {
    // abre o WhatsApp
    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${montarMensagemWhatsApp()}`,
      "_blank"
    );
    // mostra mensagem final
    setFinalizou(true);
    // esvazia o carrinho
    limparCarrinho();
  };

  const novoPedido = () => {
    setFinalizou(false);
  };

  return (
    <>
      {/* Ícone flutuante do carrinho */}
      <div className="icone-carrinho" onClick={togglePopup}>
        <FaShoppingCart size={28} />
        {carrinho.length > 0 && (
          <span className="quantidade">{carrinho.length}</span>
        )}
      </div>

      {aberto && (
        <div className="popup-carrinho">
          <h3>Meu Pedido</h3>

          {/* Se o cliente finalizou pedido, mostra mensagem de agradecimento */}
          {finalizou ? (
            <div className="mensagem-finalizacao">
              <p>🎉 Obrigada por comprar com a Castilhos!</p>
              <p>Finalize seu pedido com um de nossos atendentes no WhatsApp.</p>
              <button className="botao-novo-pedido" onClick={novoPedido}>
                Fazer um novo pedido
              </button>
            </div>
          ) : (
            <>
              {/* Lista dos itens ou mensagem "vazio" */}
              {carrinho.length === 0 ? (
                <p style={{ textAlign: "center", color: "#555" }}>
                  Seu carrinho está vazio
                </p>
              ) : (
                <ul>
                  {carrinho.map((item, index) => {
                    const isBolo = item.tipo === "bolo";
                    const precoTotal = (
                      Number(item.preco) * item.quantidade
                    ).toFixed(2);

                    return (
                      <li key={index} className="item-carrinho">
                        <div>
                          <strong>{item.nome}</strong>{" "}
                          {item.sabor && <span>({item.sabor})</span>}
                          {isBolo && (
                            <>
                              <div>Recheio: {item.recheio}</div>
                              <div>Massa: {item.massa}</div>
                              <div>Kilos: {item.quantidade}</div>
                            </>
                          )}
                          <div>R$ {precoTotal}</div>
                        </div>

                        {!isBolo && (
                          <div className="quantidade-container">
                            <button
                              onClick={() =>
                                diminuirQuantidade(item.id, item.sabor)
                              }
                            >
                              –
                            </button>
                            <span>{item.quantidade}</span>
                            <button
                              onClick={() =>
                                aumentarQuantidade(item.id, item.sabor)
                              }
                            >
                              +
                            </button>
                          </div>
                        )}

                        <button
                          className="botao-remover"
                          onClick={() =>
                            removerDoCarrinho(item.id, item.sabor)
                          }
                        >
                          Remover
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Total só aparece se tiver algo no carrinho */}
              {carrinho.length > 0 && (
                <h4>Total: R$ {totalCarrinho.toFixed(2)}</h4>
              )}

              {/* Os botões SEMPRE aparecem, mesmo vazio */}
              <div className="botoes-rodape">
                <button
                  className="botao-whatsapp"
                  onClick={finalizarPedido}
                >
                  Finalize seu pedido
                </button>

                <button onClick={togglePopup} className="botao-fechar">
                  Fechar
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CarrinhoPopup;









