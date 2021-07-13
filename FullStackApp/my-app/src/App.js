import React from "react";
import { Container } from "@material-ui/core";
import NavBar from "./component/navBar/NavBar";
import Home from "./component/home/Home";


function App() {

  console.log('rander');
  return (
    <Container maxWidth="lg">
      <NavBar></NavBar>
      <Home> </Home >
    </Container>
  );
}

export default App;
