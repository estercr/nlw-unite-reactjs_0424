import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

//Componentes e Propriedades
// Componentes === varios blocos; padrão de repetição; partes diferentes da interface, ex: header / lista de repetição
// ou seja, funções que retornam html

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
