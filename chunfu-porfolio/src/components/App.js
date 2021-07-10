import React from 'react';
import Header from './Header';
import Main from './Main';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Route from './Route';
const App = () => {
    return (
        <div>
            <Header />
            <Route path='/'>
                <Main />
            </Route>
            <Route path='/portfolio'>
                <Portfolio />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            <Footer />
        </div>
    )
}

export default App;