import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
