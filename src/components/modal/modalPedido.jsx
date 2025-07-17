import { useState, useEffect } from "react";
import "./modalPedido.css";

const ModalPedido = ({ produto, onConfirm, onCancel }) => {
  // Quantidade é kilos para bolos, ou unidades para outros
  const [quantidade, setQuantidade] = useState(1);

  const tipo = produto.tipo || "doce";

  const [saborSelecionado, setSaborSelecionado] = useState("");
  const [massa, setMassa] = useState("");
  const [recheio, setRecheio] = useState("");
  const [tipoCesta, setTipoCesta] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [precoFinal, setPrecoFinal] = useState(0);

  // Opções fixas
  const massas = ["Branca", "Chocolate 33% cacau"];

  const recheiosTradicionais = [
    "Brigadeiro",
    "Doce de leite",
    "Beijinho",
    "Abacaxi",
    "Coco",
    "Nutella",
  ];

  const recheiosEspeciais = [
    "Ninho com Morango",
    "Dois Amores",
    "Ninho com Abacaxi",
    "Leite Ninho com Nutella",
    "Ninho com Ameixa",
  ];

  const tiposCesta = [
    "Café da Manhã",
    "Namorados",
    "Chocolate",
    "Personalizada",
  ];

  // Função pra calcular preço dos bolos
  const calcularPrecoBolo = () => {
    if (tipo !== "bolo") return 0;

    if (quantidade < 1) return 0;

    let precoPorKilo = 0;
    if (recheiosTradicionais.includes(recheio)) precoPorKilo = 80;
    else if (recheiosEspeciais.includes(recheio)) precoPorKilo = 90;

    return precoPorKilo * quantidade;
  };

  // Atualiza preço final toda vez que recheio ou quantidade mudarem (só para bolos)
  useEffect(() => {
    if (tipo === "bolo") {
      setPrecoFinal(calcularPrecoBolo());
    }
  }, [recheio, quantidade]);

  const confirmar = () => {
    if (quantidade < 1) return alert("Quantidade inválida!");

    // Doces e salgados
    if (tipo === "doce" || tipo === "salgado") {
      if (!saborSelecionado) return alert("Selecione um sabor!");
      return onConfirm({ ...produto, sabor: saborSelecionado, quantidade });
    }

    // Bolos
   if (tipo === "bolo") {
  if (!massa || !recheio) return alert("Escolha massa e recheio!");

  const isEspecial = recheiosEspeciais.includes(recheio);
  const precoPorKilo = isEspecial ? 90 : 80;

  return onConfirm({
    ...produto,
    massa,
    recheio,
    quantidade,        // aqui são os Kilos
    preco: precoPorKilo, // Manda só o valor por kilo
  });
}

    // Cestas
    if (tipo === "cesta") {
      if (!tipoCesta) return alert("Escolha o tipo de cesta!");
      return onConfirm({
        ...produto,
        tipoCesta,
        mensagem: tipoCesta === "Personalizada" ? mensagem : "",
        quantidade,
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <h3>{produto.nome}</h3>

        {/* Doces/Salgados */}
        {(tipo === "doce" || tipo === "salgado") && (
          <>
            <label>Sabor:</label>
            <select
              value={saborSelecionado}
              onChange={(e) => setSaborSelecionado(e.target.value)}
            >
              <option value="">Selecione um sabor</option>
              {produto.sabores?.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Bolos */}
        {tipo === "bolo" && (
          <>
            <label>Recheio:</label>
            <select value={recheio} onChange={(e) => setRecheio(e.target.value)}>
              <option value="">Selecione o recheio</option>
              <optgroup label="Tradicionais">
                {recheiosTradicionais.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Especiais">
                {recheiosEspeciais.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </optgroup>
            </select>

            <label>Massa:</label>
            <select value={massa} onChange={(e) => setMassa(e.target.value)}>
              <option value="">Selecione a massa</option>
              {massas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <label>Kilos:</label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={quantidade}
              onChange={(e) => setQuantidade(parseFloat(e.target.value) || 1)}
            />

            {precoFinal > 0 && (
              <p>
                <strong>Preço total: </strong>R$ {precoFinal.toFixed(2)}
              </p>
            )}
          </>
        )}

        {/* Cestas */}
        {tipo === "cesta" && (
          <>
            <label>Tipo de Cesta:</label>
            <select value={tipoCesta} onChange={(e) => setTipoCesta(e.target.value)}>
              <option value="">Selecione a cesta</option>
              {tiposCesta.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {tipoCesta === "Personalizada" && (
              <>
                <label>Mensagem para nossa equipe:</label>
                <textarea
                  rows={3}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Descreva preferências, itens desejados etc."
                />
                <small style={{ color: "#888" }}>
                  Entraremos em contato para definir os detalhes da cesta
                </small>
              </>
            )}
          </>
        )}

        {/* Quantidade para doces, salgados e cestas */}
        {(tipo === "doce" || tipo === "salgado" || tipo === "cesta") && (
          <>
            <label>Quantidade:</label>
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
            />
          </>
        )}

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

export default ModalPedido;


