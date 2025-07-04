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
  } = useContext(CarrinhoContext);
  const [aberto, setAberto] = useState(false);

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
      mensagem += ` - Quantidade: ${item.quantidade}\n`;
    });
    mensagem += `Total: R$ ${totalCarrinho.toFixed(2)}`;
    return encodeURIComponent(mensagem);
  };

  const numeroWhatsApp = "5511976141427"; 

  return (
    <>
      <div className="icone-carrinho" onClick={togglePopup}>
        <FaShoppingCart size={28} />
        {carrinho.length > 0 && (
          <span className="quantidade">{carrinho.length}</span>
        )}
      </div>

      {aberto && (
        <div className="popup-carrinho">
          <h3>Meu Pedido</h3>
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            <ul>
              {carrinho.map((item, index) => (
                <li key={index} className="item-carrinho">
                  <div>
                    <strong>{item.nome}</strong>{" "}
                    {item.sabor && <span>({item.sabor})</span>}
                    <div>R$ {Number(item.preco).toFixed(2)}</div>
                  </div>

                  <div className="quantidade-container">
                    <button
                      onClick={() => diminuirQuantidade(item.id, item.sabor)}
                    >
                      –
                    </button>
                    <span>{item.quantidade}</span>
                    <button
                      onClick={() => aumentarQuantidade(item.id, item.sabor)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="botao-remover"
                    onClick={() => removerDoCarrinho(item.id, item.sabor)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}

          <h4>Total: R$ {Number(totalCarrinho).toFixed(2)}</h4>

          <div className="botoes-rodape">
            <a
              href={`https://wa.me/${numeroWhatsApp}?text=${montarMensagemWhatsApp()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-whatsapp"
            >
              Finalize seu pedido
            </a>

            <button onClick={togglePopup} className="botao-fechar">
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarrinhoPopup;





