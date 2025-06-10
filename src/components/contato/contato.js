import "./contato.css";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import Divisao from "../../components/divisao/divisao";

import { motion } from "framer-motion";

const Contato = () => {
  return (
    <section id="contato">
      <div className="contato-container">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Fale Connosco nas Redes Sociais!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ficaremos felizes em te atender:
        </motion.h2>

        <motion.div
          className="icon-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <InstagramIcon className="icon-contato" width={80} height={80} />
          <FacebookIcon className="icon-contato" width={80} height={80} />
          <WhatsappIcon className="icon-contato" width={80} height={80} />
        </motion.div>

        <Divisao />
      </div>
    </section>
  );
};

export default Contato;