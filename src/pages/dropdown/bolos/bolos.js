import React from "react";
import "./bolos.css";
import bolo1 from "../../../assets/images/bolo1.jpeg";
import bolo2 from "../../../assets/images/bolo2.jpeg";
import bolo3 from "../../../assets/images/bolo3.jpeg";
import bolo4 from "../../../assets/images/bolo4.jpeg";
import bolo5 from "../../../assets/images/bolo5.jpeg";
import bolo6 from "../../../assets/images/bolo6.jpeg";
import bolo7 from "../../../assets/images/bolo7.jpeg";
import bolo9 from "../../../assets/images/bolo9.jpeg";

const Bolos = () => {
  return (
    <div className="bolos-container">
      <div className="bolos-header">
        <h1 className="bolos-title">Bolos Confeitados</h1>
        <div className="bolos-subtitle">
          os melhores bolos confeitados de Mauá
        </div>
      </div>

      <section className="bolos-grid">
        <div className="bolos-info">
          <div className="bolos-card">
            <h2>🎂 Valores</h2>
            <p>
              <strong>R$ 80,00 o KG</strong> para recheios{" "}
              <span className="tag tradicional">tradicionais</span>
            </p>
            <p>
              <strong>+R$10,00</strong> para recheios{" "}
              <span className="tag especial">especiais</span>
            </p>
          </div>

          <div className="bolos-card">
            <h2>🍫 Recheios</h2>
            <div className="recheios-box">
              <div>
                <h3>Tradicionais</h3>
                <ul>
                  <li>Abacaxi</li>
                  <li>Abacaxi c/ coco</li>
                  <li>Brigadeiro</li>
                  <li>Doce de leite</li>
                  <li>Leite ninho</li>
                  <li>Prestígio</li>
                </ul>
              </div>
              <div>
                <h3>Especiais</h3>
                <ul>
                  <li>Ninho c/ Nutella ou morango</li>
                  <li>Doce de leite c/ coco, abacaxi ou ameixa</li>
                  <li>Ganache: chocolate ao leite, branco ou maracujá</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bolos-card">
            <h2>🍰 Massas</h2>
            <ul>
              <li>Branca</li>
              <li>Chocolate 33% cacau</li>
            </ul>
          </div>

          <div className="bolos-card aviso">
            <h2>📌 Condições</h2>
            <p>
              <strong>50% de entrada</strong> no ato da encomenda.
            </p>
            <p>
              Cancelamentos com menos de 24h <strong>não têm reembolso</strong>.
            </p>
          </div>

          <button className="bolos-botao">Adicionar ao pedido</button>
        </div>

        <div className="bolos-gallery">
          <img
            src={bolo1}
            alt="Bolo confeitado 1"
          />
          <img
            src={bolo2}
            alt="Bolo confeitado 2"
          />
          <img
            src={bolo3}
            alt="Bolo confeitado 3"
          />
          <img
            src={bolo4}
            alt="Bolo confeitado 4"
          />
          <img
            src={bolo5}
            alt="Bolo confeitado 5"
          />
          <img
            src={bolo6}
            alt="Bolo confeitado 6"
          />
          <img
            src={bolo7}
            alt="Bolo confeitado 7"
          />
          <img
            src={bolo9}
            alt="Bolo confeitado 9"
          />
        </div>
      </section>
    </div>
  );
};

export default Bolos;
