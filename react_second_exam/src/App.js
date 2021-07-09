import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import AboutMe from './components/aboutMe';
import Summary from './components/summary';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
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
