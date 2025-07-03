import "./footer.css";
import logo from "../../assets/images/logofooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-footer">
          <a href="#home">
            <img
              src={logo}
              alt="Logotipo"
            />
          </a>
            <h5 className="rua">R. Pernambuco, Jardim Elizabeth</h5>
            <h5 className="numero">11 97614-1427 / 11 98996-0189</h5>
            <h5 className="email">contato@castilhosconfeitaria.com.br</h5>
            <h5 className="chamada">(chamada para rede fixa nacional)</h5>
        </div>
        <div className="links-container">
          <ul className="links-pedido">
            <h3>Links Úteis</h3>
            <li>Faça seu Pedido</li>
            <li>Retirada e Entrega</li>
          </ul>
          <ul className="links-politica">
            <li>Políticas de Privacidade</li>
            <li>Política de Cookies</li>
            <li>Termos & Condições</li>
          </ul>
          <ul className="links-sugestoes">
            <li>Sugestões</li>
            <li>Livro de Reclamações</li>
          </ul>
        </div>
        <div className="atendimento-container">
          <h3>Horário de Atendimento</h3>
          <p className="dias">Segunda a Sexta</p>
          <p className="horarios">09:30 - 17:00</p>
          <p className="dias">Sábados, Domingos e Feriados</p>
          <p className="horarios">Fechado</p>
        </div>
      </div>
      <div className="direitos">
        <h5>
          ©CASTILHOS. Todos os direitos reservados - Marca registrada.
        </h5>
        <h5>Site criado por: Gabrielly Castilho</h5>
      </div>
    </footer>
  );
};

export default Footer;
