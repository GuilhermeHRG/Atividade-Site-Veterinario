import "./Formulario.css";
import { useState } from "react";

function Formulario({ campos }) {
  const [dados, setDados] = useState({});

  const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados, [chave]: valor });
  };

  const salvarDados = (e) => {
    e.preventDefault();
    console.log(dados);
  };

  return (
    <form id="form_contato" onSubmit={salvarDados}>
      {campos.map((item) => (
        <div className="contato" key={item.id}>
          <input
            id={item.id}
            type={item.tipo}
            value={dados[item.id] || ""}
            onChange={alteraDados}
            placeholder={item.nome}
          />
          <label htmlFor={item.id}>{item.nome}</label>
        </div>
      ))}
      <button type="submit">Enviar informação</button>
    </form>
  );
}

export default Formulario;
