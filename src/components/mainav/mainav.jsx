import { useState } from "react";
import "./mainav.css";
import logo from "../../assets/images/logo.png";
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
          <NavLink to="/cestas" onClick={fecharMenu}>
            Cestas de Presente
          </NavLink>
        </li>
            <li>
              <NavLink to="/todos" onClick={fecharMenu}>VER TODOS</NavLink>
            </li>
            
          </ul>
        </li>
        <li>
          <NavLink to="/promocoes" onClick={fecharMenu}>
            Combos e Promoções
          </NavLink>
        </li>
         <li>
          <NavLink to="/entregaseretiradas" onClick={fecharMenu}>
            Entregas/Retiradas
          </NavLink>
        </li>
         <li>
          <NavLink to="/faleconosco" onClick={fecharMenu}>
            Fale Conosco
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Mainav;


