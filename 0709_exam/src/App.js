import "./style.css";
import "./layout.css";
// import "./boostrap/css/boostrap.min.css";
import Navigation from "./components/navigation";
import Intro from "./components/intro";
import About from "./components/about";
import Summary from "./components/summary";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navigation />
      <Intro />
      <About />
      <Summary />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
