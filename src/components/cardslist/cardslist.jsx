import "./cardslist.css";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import ModalPedido from "../modal/modalPedido";
import ProductCard from "./productcard/productcard";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CardsList = ({ produtos, titulo, subtitulo, containerClass }) => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const abrirModal = (produto) => setProdutoSelecionado(produto);
  const fecharModal = () => setProdutoSelecionado(null);
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
      <div className="cardslist-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          loop={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="container-cards-list"
        >
          {produtos.map((produto) => (
            <SwiperSlide key={produto.id}>
              <ProductCard produto={produto} onAdicionar={() => abrirModal(produto)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {produtoSelecionado && (
        <ModalPedido
    produto={{ ...produtoSelecionado, tipo: "doce" }} 
    onConfirm={confirmarAdicionar}
    onCancel={fecharModal}
        />
      )}
    </div>
  );
};

export default CardsList;









