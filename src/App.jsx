import React from "react";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Secao from "./components/Secao";
import Cartao from "./components/Cartao";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

import "./App.css";

const App = () => {
  const campos = [
    {
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    },
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },
  ];

  return (
    <div className="app-container">
      <Cabecalho />
      <Secao>
        <img
          src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg"
          className="topo-imagem"
          alt="Consultório Veterinário"
        />
      </Secao>

      <Secao>
        <Titulo texto="Serviços Veterinários" />
        <div className="cartoes-container">
          <Cartao
            descricao="Consultas para animais de pequeno porte, incluindo cães e gatos."
            imagem="https://images.pexels.com/photos/4578817/pexels-photo-4578817.jpeg"
            titulo="Consultas Clínicas"
          />
          <Cartao
            descricao="Exames laboratoriais completos para diagnóstico preciso de doenças."
            imagem="https://images.pexels.com/photos/4587954/pexels-photo-4587954.jpeg"
            titulo="Exames Laboratoriais"
          />
          <Cartao
            descricao="Vacinação e cuidados preventivos para garantir a saúde do seu pet."
            imagem="https://images.pexels.com/photos/4578826/pexels-photo-4578826.jpeg"
            titulo="Vacinação e Prevenção"
          />
          <Cartao
            descricao="Cirurgias especializadas realizadas com segurança e cuidado."
            imagem="https://images.pexels.com/photos/4102747/pexels-photo-4102747.jpeg"
            titulo="Cirurgias Veterinárias"
          />
        </div>
      </Secao>

      <Secao>
        <Titulo texto="Contato" />
        <Formulario campos={campos} />
      </Secao>
    </div>
  );
};

export default App;
