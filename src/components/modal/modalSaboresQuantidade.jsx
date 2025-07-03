import { useState } from "react";
import "./modalSaboresQuantidade.css";

const ModalSaboresQuantidade = ({ produto, onConfirm, onCancel }) => {
  const [saborSelecionado, setSaborSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  const sabores = produto.sabores || [];

  const confirmar = () => {
    if (!saborSelecionado) {
      alert("Selecione um sabor!");
      return;
    }
    if (quantidade < 1) {
      alert("Quantidade inválida!");
      return;
    }
    onConfirm({ ...produto, sabor: saborSelecionado, quantidade });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <h3>Escolha o sabor e a quantidade</h3>

        <label>Sabor:</label>
        <select
          value={saborSelecionado}
          onChange={(e) => setSaborSelecionado(e.target.value)}
        >
          <option value="" disabled>
            Selecione um sabor
          </option>
          {sabores.map((sabor) => (
            <option key={sabor} value={sabor}>
              {sabor}
            </option>
          ))}
        </select>

        <label>Quantidade:</label>
        <input
          type="number"
          min="1"
          value={quantidade}
          onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
        />

        <div className="modal-botoes">
          <button className="confirmar" onClick={confirmar}>
            Confirmar
          </button>
          <button className="cancelar" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSaboresQuantidade;
