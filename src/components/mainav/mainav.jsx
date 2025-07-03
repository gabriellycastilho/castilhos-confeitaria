import { useState } from "react";
import "./mainav.css";
import logo from "../../assets/images/logo.png";
import { ReactComponent as ProdutosIcon } from "../../assets/icons/produtos.svg";
import { ReactComponent as PromocoesIcon } from "../../assets/icons/promocoes.svg";
import { ReactComponent as CestasIcon } from "../../assets/icons/cestas.svg";
import { ReactComponent as PedidoIcon } from "../../assets/icons/pedido.svg";
import { NavLink } from "react-router-dom";

const Mainav = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const toggleMenu = () => setMenuAberto((prev) => !prev);
  const toggleDropdown = () => setDropdownAberto((prev) => !prev);

  // Fecha menu ao clicar num link (mobile)
  const fecharMenu = () => {
    setMenuAberto(false);
    setDropdownAberto(false);
  };

  return (
    <nav className="mainav-container">
      <div className="logo">
        <NavLink to="/home" onClick={fecharMenu}>
          <img src={logo} alt="Logotipo" />
        </NavLink>
      </div>

      {/* Botão hamburguer - visível só no mobile */}
      <div className={`hamburguer ${menuAberto ? "ativo" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`menu-lista ${menuAberto ? "aberto" : ""}`}>
        <li className="dropdown">
          <div className="dropdown-title" onClick={toggleDropdown}>
            <ProdutosIcon width={50} height={50} />
            Produtos e Sabores
          </div>
          <ul className={`dropdown-menu ${dropdownAberto ? "aberto" : ""}`}>
            <li>
              <NavLink to="/doces" onClick={fecharMenu}>Doces</NavLink>
            </li>
            <li>
              <NavLink to="/salgados" onClick={fecharMenu}>Salgados</NavLink>
            </li>
            <li>
              <NavLink to="/bolos" onClick={fecharMenu}>Bolos Confeitados</NavLink>
            </li>
            <li>
              <NavLink to="/todos" onClick={fecharMenu}>VER TODOS</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/pedido" onClick={fecharMenu}>
            <PedidoIcon />
            Faça seu Pedido
          </NavLink>
        </li>
        <li>
          <NavLink to="/cestas" onClick={fecharMenu}>
            <CestasIcon />
            Cestas de Presente
          </NavLink>
        </li>
        <li>
          <NavLink to="/promocoes" onClick={fecharMenu}>
            <PromocoesIcon />
            Combos e Promoções
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Mainav;


