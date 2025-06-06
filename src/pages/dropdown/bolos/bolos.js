import React from "react";
import "./bolos.css";
import bolo1 from "../../../assets/images/bolo1.jpeg";
import bolo2 from "../../../assets/images/bolo2.jpeg";
import bolo3 from "../../../assets/images/bolo3.jpeg";
import bolo4 from "../../../assets/images/bolo4.jpeg";
import bolo5 from "../../../assets/images/bolo5.jpeg";
import bolo6 from "../../../assets/images/bolo6.jpeg";
import bolo7 from "../../../assets/images/bolo7.jpeg";
import bolo8 from "../../../assets/images/bolo8.jpeg";
import bolo9 from "../../../assets/images/bolo9.jpeg";

const Bolos = () => {
  return (
    <div className="bolos-container">
      <h1 className="bolos-title">Bolos Confeitados</h1>

      <section className="bolos-grid">
        <div className="bolos-info">
          <div className="bolos-valores">
            <h2>Valores</h2>
            <p>
              R$ 80,00 o KG para os <strong>recheios tradicionais</strong>
            </p>
            <p>
              <strong>+R$10,00</strong> para recheios especiais
            </p>
          </div>

          <div className="bolos-recheios">
            <div>
              <h3>Recheios Tradicionais</h3>
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
              <h3>Recheios Especiais</h3>
              <ul>
                <li>Ninho c/ Nutella ou morango</li>
                <li>Doce de leite c/ coco, abacaxi ou ameixa</li>
                <li>Ganache: chocolate ao leite, branco ou maracujá</li>
              </ul>
            </div>
          </div>

          <div className="bolos-massas">
            <h3>Massas</h3>
            <ul>
              <li>Branca</li>
              <li>Chocolate 33% cacau</li>
            </ul>
          </div>

          <div className="bolos-condicoes">
            <p>
              <strong>50% de entrada</strong> no ato da encomenda
            </p>
            <p>
              Cancelamentos em menos de 24h{" "}
              <strong>não têm reembolso do valor de entrada.</strong>
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
            alt="Bolo confeitado 4"
          />
          <img
            src={bolo6}
            alt="Bolo confeitado 4"
          />
          <img
            src={bolo7}
            alt="Bolo confeitado 4"
          />
          <img
            src={bolo8}
            alt="Bolo confeitado 4"
          />
          <img
            src={bolo9}
            alt="Bolo confeitado 4"
          />
        </div>
      </section>
    </div>
  );
};

export default Bolos;
