import React from 'react';

import Main from './Main';
import About from './About';
import Summary from './Summary';
import Projects from './Projects';
import Contacts from './Contact';

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Summary />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
