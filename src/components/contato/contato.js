import React from "react";
import "./contato.css";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";

const Contato = () => {
    return (
        <section id="contato">
<div class="contato-container">
  <div class="overlay">
    <h1>Fale Connosco nas Redes Sociais!</h1>
    <h2>Ficaremos felizes em te atender:</h2>
    <div class="icon-container">
    <InstagramIcon className="icon-contato"
              width={80}
              height={80}
            />
      <FacebookIcon className="icon-contato"
              width={80}
              height={80}
            />
      <WhatsappIcon className="icon-contato"
              width={80}
              height={80}
            />
    </div>
  </div>
</div>
</section>
    )
}

export default Contato;