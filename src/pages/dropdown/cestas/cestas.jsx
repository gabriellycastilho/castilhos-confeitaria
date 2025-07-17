import "./cestas.css";
import { motion } from "framer-motion";
import { useState, useContext } from "react"; 
import { CarrinhoContext } from "../../../context/CarrinhoContext"; 
import ModalPedido from "../../../components/modal/modalPedido"; 
import { produtosCestas } from "../../../data/produtosCestas";

const Cestas = () => {
  const [showModal, setShowModal] = useState(false); 
  const { adicionarAoCarrinho } = useContext(CarrinhoContext); 

  return (
    <div className="cestas-container">
      <div className="cestas-header">
        <motion.h1
          className="cestas-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cestas Especiais
        </motion.h1>
        <div className="cestas-subtitle">
          Presentes personalizados para todas as ocasiões
        </div>
      </div>

      <div className="cestas-content">
        <section className="cestas-grid">
          {/* LADO ESQUERDO */}
          <div className="cestas-info">
            {produtosCestas.map((cesta) => (
              <div className="cestas-card" key={cesta.id}>
                <h2>🎁 {cesta.nome}</h2>
                <ul>
                  {cesta.itens.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="cesta-preco">{cesta.preco}</p>
              </div>
            ))}

            <div className="cestas-card aviso">
              <h2>📌 Condições</h2>
              <p>✔ Pedido mínimo de 2 dias antes</p>
              <p>✔ Personalizamos conforme seu pedido</p>
              <p>✔ Entrega grátis em Mauá</p>
            </div>

            {/* BOTÃO QUE ABRE O MODAL */}
            <button onClick={() => setShowModal(true)} className="cestas-botao">
              Adicionar ao pedido
            </button>

            {/* ✅ MODAL ABRE AQUI */}
            {showModal && (
              <ModalPedido
                produto={{ nome: "Cesta Especial", tipo: "cesta", preco: "R$ 150,00" }}
                onCancel={() => setShowModal(false)}
                onConfirm={(pedido) => {
                  adicionarAoCarrinho(pedido);
                  setShowModal(false);
                }}
              />
            )}
          </div>

          {/* GALERIA DE IMAGENS */}
          <div className="cestas-gallery">
            {produtosCestas.map((cesta, i) => (
              <img
                key={i}
                src={cesta.imagem}
                alt={cesta.nome}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cestas;


