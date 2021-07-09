import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact/Contact';
import Profolio from "./components/profolio/profolio";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= "/contact" component={Contact}/>
          <Route exact path= "/profolio" component={Profolio}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
