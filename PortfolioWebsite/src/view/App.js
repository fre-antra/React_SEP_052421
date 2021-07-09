import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Summary from "./pages/Summary/Summary";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Layout>
      <Route exact={true} path="/">
        <Main />
        <About />
        <Summary />
        <Projects />
        <Contact />
      </Route>

      <Route exact path="/portfolio">
        <Projects />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>
    </Layout>
  );
}

export default App;
