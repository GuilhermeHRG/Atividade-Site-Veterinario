import React, { useEffect, useState } from "react";

const Pokemon = ({ numero }) => {
  const [dados, setDados] = useState("");
  const [mapa, setMapa] = useState("");

  useEffect(() => {
    fetch(`http://api.open-notify.org/iss-now.json`)
      .then((resposta) => resposta.json())
      .then((texto) => {
        const { iss_position } = texto;
        setDados(`Latitude: ${iss_position.latitude}
                  Longitude: ${iss_position.longitude}`);
        setMapa(
          `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14569.382092513008!2d${iss_position.latitude}!3d${iss_position.longitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA1JzIxLjYiUyA1McKwNDMnMDcuNiJX!5e0!3m2!1spt-BR!2sbr!4v1722042321137!5m2!1spt-BR!2sbr`
        );
      });
  }, []);

  return (
    <>
      <iframe
        src={mapa}
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>{" "}
    </>
  );
};

export default Pokemon;
