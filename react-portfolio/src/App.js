// import './App.css'
// import React from 'react'
// import NavBar from './components/navbar/NavBar'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Switch>
//           <Route exact path='/'>
//             <NavBar />
//             {/* <Home /> */}
//             <Projects />
//             <Contact />
//             <Footer />
//           </Route>
//           <Route exact path='/portfolio'>
//             <Header />
//             <Projects />
//           </Route>
//           <Route exact path='/contact'>
//             <Header />
//             <Contact />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// export default App

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
