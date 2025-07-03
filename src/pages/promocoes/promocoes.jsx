import { combosPromocoes } from "../../data/combosPromocoes";
import CardsList from "../../components/cardslist/cardslist";
import "./promocoes.css"
import "../../../src/components/cardslist/productcard/productcard.css"; // CSS compartilhado entre Doces, Salgados, Bolos e Todos

const Combos = () => {
  return (
    <CardsList
      produtos={combosPromocoes}
      titulo="Combos e Promoções"
      subtitulo="os melhores combos de Mauá"
      containerClass="promocoes"
    />
  );
};

export default Combos;
