import "./bolos.css";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { CarrinhoContext } from "../../../context/CarrinhoContext"; 
import ModalPedido from "../../../components/modal/modalPedido"; 
import produtosBolos from "../../../data/produtosBolos";

import bolo1 from "../../../assets/images/bolo1.jpeg";
import bolo2 from "../../../assets/images/bolo2.jpeg";
import bolo3 from "../../../assets/images/bolo3.jpeg";
import bolo4 from "../../../assets/images/bolo4.jpeg";
import bolo5 from "../../../assets/images/bolo5.jpeg";
import bolo6 from "../../../assets/images/bolo6.jpeg";
import bolo7 from "../../../assets/images/bolo7.jpeg";
import bolo9 from "../../../assets/images/bolo9.jpeg";

const imagensMap = {
  bolo1,
  bolo2,
  bolo3,
  bolo4,
  bolo5,
  bolo6,
  bolo7,
  bolo9,
};

const Bolos = () => {
  const [showModal, setShowModal] = useState(false); 
  const { adicionarAoCarrinho } = useContext(CarrinhoContext); 

  return (
    <div className="bolos-container">
      {/* HEADER */}
      <div className="bolos-header">
        <motion.h1
          className="bolos-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bolos Confeitados
        </motion.h1>
        <div className="bolos-subtitle">
          os melhores bolos confeitados de Mauá
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="bolos-content">
        <section className="bolos-grid">
          {/* LADO ESQUERDO */}
          <div className="bolos-info">
            <div className="bolos-card">
              <h2>🎂 Valores</h2>
              {produtosBolos.valores.map(({ tipo, preco }, i) => (
                <p key={i}>
                  <strong>{preco}</strong> para recheios{" "}
                  <span className={`tag ${tipo.toLowerCase()}`}>
                    {tipo.toLowerCase()}
                  </span>
                </p>
              ))}
            </div>

            <div className="bolos-card">
              <h2>🍫 Recheios</h2>
              <div className="recheios-box">
                <div>
                  <h3>Tradicionais</h3>
                  <ul>
                    {produtosBolos.recheios.tradicionais.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Especiais</h3>
                  <ul>
                    {produtosBolos.recheios.especiais.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bolos-card">
              <h2>🍰 Massas</h2>
              <ul>
                {produtosBolos.massas.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bolos-card aviso">
              <h2>📌 Condições</h2>
              {produtosBolos.condicoes.map((texto, i) => (
                <p key={i}>{texto}</p>
              ))}
            </div>

            {/* BOTÃO ABRE O MODAL */}
            <button onClick={() => setShowModal(true)} className="bolos-botao">
              Adicionar ao pedido
            </button>

            {/* MODAL QUE PERMITE ESCOLHER RECHEIO, MASSA E QUANTIDADE */}
            {showModal && (
              <ModalPedido
                produto={{
                  nome: "Bolo Confeitado",
                  tipo: "bolo",
                  preco: "R$ 100,00",
                  opcoes: {
                    recheios: produtosBolos.recheios,
                    massas: produtosBolos.massas,
                  },
                }}
                onCancel={() => setShowModal(false)}
                onConfirm={(pedido) => {
                  adicionarAoCarrinho(pedido);
                  setShowModal(false);
                }}
              />
            )}
          </div>

          {/* GALERIA */}
          <div className="bolos-gallery">
            {produtosBolos.imagens.map((imgName, i) => {
              const ImgImport = imagensMap[imgName.replace(".jpeg", "")];
              return (
                <img
                  key={i}
                  src={ImgImport}
                  alt={`Bolo confeitado ${i + 1}`}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bolos;
