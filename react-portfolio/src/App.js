import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Route>
          <Route exact path='/portfolio'>
            <NavBar />
            <Projects />
            <Contact />
            <Footer />
          </Route>
          <Route exact path='/contact'>
            <NavBar />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
