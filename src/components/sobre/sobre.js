import React from "react";
import "./sobre.css";
import { ReactComponent as SaborIcon } from "../../assets/icons/sabor.svg";
import { ReactComponent as CoraçãoIcon } from "../../assets/icons/coração.svg";
import { ReactComponent as EuroIcon } from "../../assets/icons/euro.svg";
import { ReactComponent as QualidadeIcon } from "../../assets/icons/qualidade.svg";

const Sobre = () => {
  return (
      <section id="sobre">
        <div className="text-container">
          <h2>
            Olá! Somos a <span>Brazuka Doces.</span>
          </h2>
          <p>
            Nossa história começou em 2018 no Brasil, movidos pela paixão por
            doces que proporcionam momentos especiais. Em 2022, trouxemos esse
            carinho para Portugal, com o desejo de conquistar paladares e criar
            novas memórias através de sabores irresistíveis.
          </p>
          <p>
            Cada produto que fazemos é pensado com dedicação, qualidade e aquele
            toque caseiro que faz toda a diferença. Acreditamos que um bom doce
            tem o poder de despertar sorrisos, aproximar pessoas e tornar
            qualquer ocasião ainda mais especial.
          </p>
          <p>
            Estamos felizes em encantar cada vez mais o público português com
            nosso sabor surpreendente, atenção aos detalhes e preço justo. Para
            nós, mais do que vender doces, é sobre compartilhar amor em cada
            pedacinho.
          </p>

          <p>
            Seja bem-vindo à nossa história – e aproveite cada mordida dessa
            experiência!
          </p>
        </div>
        <div className="box-container">
          <div className="box diferente">
            <SaborIcon
              width={80}
              height={80}
            />
            <h3>Sabor Incomparável</h3>
          </div>
          <div className="box">
            <CoraçãoIcon
              width={80}
              height={80}
            />
            <h3>Feito com Amor</h3>
          </div>
          <div className="box">
            <EuroIcon
              width={80}
              height={80}
            />
            <h3>Preço Justo</h3>
          </div>
          <div className="box diferente">
            <QualidadeIcon
              width={80}
              height={80}
            />
            <h3>Qualidade que Surpreende</h3>
          </div>
        </div>
      </section>
  );
};

export default Sobre;
