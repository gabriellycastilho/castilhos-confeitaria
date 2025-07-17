import "./doces.css";
import CardsList from "../../../components/cardslist/cardslist";
import "../../../components/cardslist/productcard/productcard.css"; // CSS compartilhado entre Doces, Salgados, Bolos e Todos
import "../../../components/cardslist/cardslist.css";



const Doces = () => {
  return (
    <CardsList
      produtos={produtosDoces}
      titulo="Doces"
      subtitulo="os melhores docinhos de Mauá"
      containerClass="doces"
    />
  );
};

export default Doces;
