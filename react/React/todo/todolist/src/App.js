import React from "react";
import ReactDom from "react-dom";
import "./App.css";

import Layout from "./components/layout/Layout.js";
import FuncLayout from "./funcComponents/layout/Layout.js";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <FuncLayout></FuncLayout>
    </div>
  );
}

export default App;
