import "./productcard.css";
import { motion } from "framer-motion";

export default function ProductCard({ produto, onAdicionar }) {
  const imagemPath = `${process.env.PUBLIC_URL}/assets/images/${produto.imagem}`;

  return (
    <motion.div
      className="product-card-motion"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="product-card">
        {/* Nome */}
        <h3 className="product-card-nome">{produto.nome}</h3>

        {/* Imagem */}
        <img
          src={imagemPath}
          alt={produto.nome}
          className="product-card-img"
        />

        {/* Detalhes diferentes por categoria */}
        {produto.detalhes?.sabores && (
          <ul className="product-card-sabores">
            {produto.detalhes.sabores.map((sabor, idx) => (
              <li key={idx}>{sabor}</li>
            ))}
          </ul>
        )}

        {produto.categoria === "cestas" && produto.detalhes?.itens && (
          <ul className="product-card-itens">
            {produto.detalhes.itens.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

       {/* Preço */}
<div className="product-card-footer">
  <p className="product-card-preco">
    {produto.preco !== undefined && produto.preco !== null
      ? `R$ ${Number(produto.preco).toFixed(2)}`
      : "Sob consulta"}
  </p>

  {onAdicionar && (
    <button
      className="product-card-botao"
      onClick={() =>
        onAdicionar({
          id: produto.id,
          nome: produto.nome,
          imagem: imagemPath,
          preco: Number(produto.preco) || 0,
          categoria: produto.categoria,
          quantidade: 1,
        })
      }
    >
      Adicionar ao pedido
    </button>
  )}
</div>

      </div>
    </motion.div>
  );
}






