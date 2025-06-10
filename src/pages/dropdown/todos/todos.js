import "./todos.css";
import { produtosDoces } from "../../../data/produtosDoces";
import { produtosSalgados } from "../../../data/produtosSalgados";
import ProductCard from "../../../components/productcard/productcard";
import TodosImg from "../../../assets/images/todosbackground.jpg";

const Todos = () => {
  const todosProdutos = [...produtosDoces, ...produtosSalgados];

  return (
    <div className="todos-container">
      <div className="todos-header">
        <h1 className="todos-title">Todos os Produtos</h1>
        <div className="todos-subtitle">
          os melhores doces e salgados de Mauá
        </div>
      </div>

      <div className="todos-cards-list">
        {todosProdutos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onAdicionar={() => console.log(`Adicionou: ${produto.nome}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
