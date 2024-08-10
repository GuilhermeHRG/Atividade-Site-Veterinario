import React from "react";
import "./Cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/150x50" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <div className="hamburger"></div>
      </div>
    </header>
  );
};

export default Cabecalho;
