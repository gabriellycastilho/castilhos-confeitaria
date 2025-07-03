import "./todos.css";
import { produtosDoces } from "../../../data/produtosDoces";
import { produtosSalgados } from "../../../data/produtosSalgados";
import CardsList from "../../../components/cardslist/cardslist"; 

const Todos = () => {
  const todosProdutos = [...produtosDoces, ...produtosSalgados];

  return (
    <CardsList
      produtos={todosProdutos}
      titulo="Todos os produtos"
      subtitulo="Os melhores doces e salgados de Mauá"
      containerClass="todos"
    />
  );
};

export default Todos;

