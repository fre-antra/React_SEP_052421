import React from 'react';
import Header from './Header';
import Main from './Main';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Route from './Route';
const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            {/*<Home />*/}
            {/*<Portfolio />*/}
            <Contact />
            <Footer />
        </div>
    )
}

export default App;