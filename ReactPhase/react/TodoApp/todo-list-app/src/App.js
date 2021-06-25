import "./App.css";
import DetailPage from "./fnComponent/DetailPage/DetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/configureStore";

// import Header from "./classComponent/Header/Header";
// import TodoList from './classComponent/TodoList/TodoList'

import Header from "./fnComponent/Header/Header";
import TodoList from "./fnComponent/TodoList/TodoList";

function App() {
  return (
    <>
      <Router>
        {/* <Provider store={store}> */}
          <header className="header">
            <Header />
          </header>

          <main className="content">
            <Switch>
              <Route exact path="/">
                <TodoList />
              </Route>
              <Route exact path="/detail">
                <DetailPage />
              </Route>
            </Switch>
          </main>
        {/* </Provider> */}
      </Router>
    </>
  );
}

export default App;
