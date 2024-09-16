"use client";
import { useState, useEffect } from "react";
import User from "../User";

export default function PageDetails({ params }) {
  const { id } = params;
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.find((user) => user["Object Id"] === id));
        setUsuario(data.find((user) => user["Object Id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <User
        Id={usuario["Object Id"]}
        UserName={usuario["Display name"]}
        // Picture={`/img/${usuario["Display name"]}.jpg`}
        Picture={usuario.Picture}
        Title={usuario.Title}
        City={usuario.City}
      />
      {/* <img src={usuario.Picture} alt={usuario.UserName} /> */}
    </>
  );
}
