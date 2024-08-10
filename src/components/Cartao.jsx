import React from "react";

const Cartao = ({ titulo, descricao, imagem }) => {
    return (
        <div className="cartao">
            <img src={imagem} alt={titulo} />
            <div className="conteudo-cartao">

                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>

    );
};
export default Cartao;