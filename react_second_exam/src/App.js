import './App.css';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Footer from './components/footer';
import Main from './components/main';
import Portfolio from './components/portfolio';
import Summary from './components/summary';

function App() {
  return (
    <div className='App'>
      <Main />
      <AboutMe />
      <Summary />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
