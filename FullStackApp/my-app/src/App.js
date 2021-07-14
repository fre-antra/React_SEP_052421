import React from "react";
import { Container } from "@material-ui/core";
import { Route, Switch} from 'react-router-dom'


import NavBar from "./component/navBar/NavBar";
import Home from "./component/home/Home";
import Auth from "./component/auth/Auth";


function App() {

  console.log('rander');
  return (
    <Container maxWidth="lg">
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/auth' component={Auth}></Route>
      </Switch>
      {/* <Home></Home > */}
    </Container>
  );
}

export default App;
