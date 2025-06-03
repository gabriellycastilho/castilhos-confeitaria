import React from "react";
import "./sobre.css";
import { ReactComponent as SaborIcon } from "../../assets/icons/sabor.svg";
import { ReactComponent as CoraçãoIcon } from "../../assets/icons/coração.svg";
import { ReactComponent as EuroIcon } from "../../assets/icons/euro.svg";
import { ReactComponent as QualidadeIcon } from "../../assets/icons/qualidade.svg";

import { motion } from "framer-motion";


const Sobre = () => {
  return (
    <section id="sobre">
      {/* TEXTO ANIMADO AO ROLAR */}
      <motion.div
        className="text-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>
          Olá! Somos a <span>Castilhos.</span>
        </h2>

        <p>
          Somos uma família simples e unida, guiada pela fé em Deus e pelo amor
          em tudo o que fazemos. Moramos em Mauá, e foi no aconchego do nosso
          lar que nasceu o desejo de levar carinho, sabor e felicidade para a
          vida das pessoas.
        </p>

        <p>
          Cada pão de mel, bolo de pote, lanche natural e pão caseiro é feito
          com ingredientes selecionados e, acima de tudo, com muito cuidado,
          amor e respeito por quem vai receber. Acreditamos que cozinhar é uma
          forma de demonstrar afeto, e é isso que colocamos em cada receita: a
          nossa dedicação, nossa alegria e os valores que trazemos no coração.
        </p>

        <p>
          Mais do que vender doces e lanches, queremos criar momentos especiais,
          com aquele sabor de casa que aquece a alma. Seja muito bem-vindo à
          nossa história, que é escrita todos os dias com fé, trabalho e
          gratidão.
        </p>

        <p>
          E não se esqueça: aproveite cada mordida dessa experiência!
        </p>
      </motion.div>

      {/* BOXES ANIMADAS AO ROLAR UMA POR UMA */}
      <div className="box-container">
        {[ // array com os dados das boxes
          { icon: <SaborIcon width={80} height={80} />, title: "Sabor Incomparável" },
          { icon: <CoraçãoIcon width={80} height={80} />, title: "Feito com Amor" },
          { icon: <EuroIcon width={80} height={80} />, title: "Preço Justo" },
          { icon: <QualidadeIcon width={80} height={80} />, title: "Qualidade que Surpreende" },
        ].map((box, index) => (
          <motion.div
            key={index}
            className={`box ${index % 2 === 0 ? "diferente" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {box.icon}
            <h3>{box.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sobre;

