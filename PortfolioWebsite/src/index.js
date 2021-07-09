import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./view/public/boostrap/css/bootstrap.min.css";
import App from "./view/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
