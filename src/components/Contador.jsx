import React, { useState } from "react";
import Numeros from "./Numeros";

const Contador = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <Numeros numero={contador} />

      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};
export default Contador;
