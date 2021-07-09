import NavigationBar from './components/navigation-bar/NavigationBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
