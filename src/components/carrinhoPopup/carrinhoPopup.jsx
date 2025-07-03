import { useContext, useState } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { FaShoppingCart } from "react-icons/fa";
import "./carrinhoPopup.css";

const CarrinhoPopup = () => {
  const { carrinho, removerDoCarrinho } = useContext(CarrinhoContext);
  const [aberto, setAberto] = useState(false);

  const togglePopup = () => {
    setAberto(!aberto);
  };

  return (
    <>
      <div className="icone-carrinho" onClick={togglePopup}>
        <FaShoppingCart size={28} />
        {carrinho.length > 0 && <span className="quantidade">{carrinho.length}</span>}
      </div>

      {aberto && (
        <div className="popup-carrinho">
          <h3>Meu Pedido</h3>
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            <ul>
              {carrinho.map((item, index) => (
                <li key={index}>
                  {item.nome} - {item.preco}
                 <button onClick={() => removerDoCarrinho(item.id, item.sabor)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={togglePopup}>Fechar</button>
        </div>
      )}
    </>
  );
};

export default CarrinhoPopup;
