import "./topnav.css";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";

const Topnav = () => {
  return (
    <div className="topnav-container">
      <ul>
        <li>
          <a href="#sobre">Sobre Nós</a>
        </li>
        <li>
          <a href="#galeria">Galeria</a>
        </li>
        <li>
          <a href="#depoimentos">Depoimentos</a>
        </li>
      </ul>

      <div className="social-icons">
        <InstagramIcon
          width={13}
          height={13}
          fill="white"
        />
        <FacebookIcon
          width={13}
          height={13}
          fill="white"
        />
        <WhatsappIcon
          width={15}
          height={15}
          fill="white"
        />
      </div>
    </div>
  );
};

export default Topnav;
