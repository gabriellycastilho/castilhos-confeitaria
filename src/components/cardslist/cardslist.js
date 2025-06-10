import ProductCard from "../productcard/productcard";
import "./cardslist.css"; 

const CardsList = ({ produtos, titulo, subtitulo, containerClass }) => {
  return (
    <div className={containerClass}>
      <div className={`${containerClass}-header`}>
        <h1 className={`${containerClass}-title`}>{titulo}</h1>
        <div className={`${containerClass}-subtitle`}>{subtitulo}</div>
      </div>

      <div className={`${containerClass}-cards-list`}>
        {produtos.map((produto) => (
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

export default CardsList;
