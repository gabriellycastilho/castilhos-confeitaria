    import React from "react";
    import "./docecard.css"; // já cria esse depois se não tiver

    const DoceCard = ({ produto, onAdicionar }) => {
    return (
        <div className="doce-card">
            <h3 className="doce-card-nome">{produto.nome}</h3>
        <img
            src={produto.imagem}
            alt={produto.nome}
            className="doce-card-img"
        />

        <ul className="doce-card-sabores">
            {produto.sabores.map((sabor, index) => (
            <li key={index}>{sabor}</li>
            ))}
        </ul>

    <div className="doce-card-footer">
        <p className="doce-card-preco">{produto.preco}</p>
        <button
            className="doce-card-botao"
            onClick={onAdicionar}
        >
            Adicionar ao pedido
        </button>
        </div>
        </div>
    );
    };

    export default DoceCard;

