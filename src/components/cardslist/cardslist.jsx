import "./cardslist.css";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import ModalSaboresQuantidade from "../modal/modalSaboresQuantidade";
import ProductCard from "./productcard/productcard";
import { toast } from "react-toastify";

const CardsList = ({ produtos, titulo, subtitulo, containerClass }) => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  // Quando clica no botão do card
  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
  };

  // Quando cancela o modal
  const fecharModal = () => {
    setProdutoSelecionado(null);
  };

  // Quando confirma o modal
  const confirmarAdicionar = (produtoComDetalhes) => {
    adicionarAoCarrinho(produtoComDetalhes);
    toast.success("Produto adicionado ao carrinho!");
    fecharModal();
  };

  return (
    <div className={containerClass}>
      <div className={`${containerClass}-header`}>
        <motion.h1
          className={`${containerClass}-title`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {titulo}
        </motion.h1>
        <div className={`${containerClass}-subtitle`}>{subtitulo}</div>
      </div>

      <div className={`${containerClass}-cards-list`}>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onAdicionar={() => abrirModal(produto)}
          />
        ))}
      </div>

      {produtoSelecionado && (
        <ModalSaboresQuantidade
          produto={produtoSelecionado}
          onConfirm={confirmarAdicionar}
          onCancel={fecharModal}
        />
      )}
    </div>
  );
};

export default CardsList;




