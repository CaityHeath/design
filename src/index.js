import React from "react";
import ReactDOM from "react-dom";
import Mixins from "./design/_mixins.scss";
import App from "./app.js";

function Main() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
