import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./component/header/Header";
import MoviePage from "./component/moviesPage/MoviePage";

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
        <Route exact path='/'>
          <Header></Header>
        </Route>
        <Route  path='/movie'>
          <MoviePage></MoviePage>
        </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
