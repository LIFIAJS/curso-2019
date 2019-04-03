import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Help = () => (
  <Fragment>
    <h2>
      Sandbox para ejemplos
    </h2>
    <ul>
      <li>
        Importe alguna de las compoentes de src
      </li>
      <li>
        Cambie la componente Help por la compoente importada
      </li>
    </ul>
  </Fragment>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<Help />, rootElement);
