import "./mainav.css";
import logo from "../../assets/images/logo.png";
import { ReactComponent as ProdutosIcon } from "../../assets/icons/produtos.svg";
import { ReactComponent as PromocoesIcon } from "../../assets/icons/promocoes.svg";
import { ReactComponent as EventosIcon } from "../../assets/icons/eventos.svg";
import { ReactComponent as PedidoIcon } from "../../assets/icons/pedido.svg";

import { NavLink } from "react-router-dom";

const Mainav = () => {
  return (
    <nav className="mainav-container">
      <div className="logo">
        <NavLink to="/home">
          <img src={logo} alt="Logotipo" />
        </NavLink>
      </div>
      <ul>

         {/* Aqui começa o dropdown */}
        <li className="dropdown">
          <div className="dropdown-title">
            <ProdutosIcon width={50} height={50} />
            Produtos e Sabores
          </div>
          <ul className="dropdown-menu">
             <li>
              <NavLink to="/doces">Doces</NavLink>
            </li>
            <li>
              <NavLink to="/salgados">Salgados</NavLink>
            </li>
            <li>
              <NavLink to="/bolos">Bolos Confeitados</NavLink>
            </li>
            <li>
              <NavLink to="/todos">VER TODOS</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/pedido">
            <PedidoIcon width={50} height={50} />
            Faça seu Pedido
          </NavLink>
        </li>


        <li>
          <NavLink to="/eventos">
            <EventosIcon width={50} height={50} />
            Festas e Eventos
          </NavLink>
        </li>
        <li>
          <NavLink to="/promocoes">
            <PromocoesIcon width={50} height={50} />
            Combos e Promoções
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Mainav;

