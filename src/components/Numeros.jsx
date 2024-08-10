import React, { useEffect, useState } from "react";

const Numeros = ({ numero }) => {
  const [dados, setDados] = useState("");

  useEffect(() => {
    fetch(`http://numbersapi.com/${numero}`)
      .then((resposta) => resposta.text())
      .then((texto) => setDados(texto))
      .catch(console.log("Deu erro"));
  }, [numero]);

  return (
    <>
      <h1>{dados}</h1>
    </>
  );
};

export default Numeros;
