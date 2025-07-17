import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "../cardslist/productcard/productcard";
import ModalPedido from "../modal/modalPedido"; 
import { CarrinhoContext } from "../../context/CarrinhoContext";

export default function ProdutosPorCategoria({ categoria }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  // Estado para controlar modal
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/produtos")
      .then((res) => {
        const filtrados = categoria
          ? res.data.filter((p) => p.categoria === categoria)
          : res.data;
        setProdutos(filtrados);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar produtos");
        setLoading(false);
      });
  }, [categoria]);

  if (loading) return <p>Carregando {categoria || "produtos"}...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Quando clicar em adicionar, abre modal com produto selecionado
  function abrirModal(produto) {
    setProdutoSelecionado(produto);
    setModalAberto(true);
  }

  // Quando confirmar no modal, adiciona ao carrinho e fecha modal
  function confirmarPedido(produtoComDetalhes) {
    adicionarAoCarrinho(produtoComDetalhes);
    setModalAberto(false);
    setProdutoSelecionado(null);
  }

  // Cancela modal
  function cancelarPedido() {
    setModalAberto(false);
    setProdutoSelecionado(null);
  }

  return (
    <div>
      {categoria && (
        <h2 className="text-2xl font-bold mb-4">
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
        </h2>
      )}

      <div className="grid grid-cols-3 gap-4">
        {produtos.map((p) => (
          <ProductCard
            key={p.id}
            produto={p}
            // ao invés de adicionar direto, abre o modal
            onAdicionar={() => abrirModal(p)}
          />
        ))}
      </div>

      {/* Modal só aparece se modalAberto for true */}
      {modalAberto && produtoSelecionado && (
        <ModalPedido
          produto={produtoSelecionado}
          onConfirm={confirmarPedido}
          onCancel={cancelarPedido}
        />
      )}
    </div>
  );
}




