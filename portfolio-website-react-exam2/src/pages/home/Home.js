import React, { Fragment } from 'react';
import Main from '../../components/main/Main';
import About from '../../components/about/About';
import Summary from '../../components/summary/Summary';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <Fragment>
      <Main />
      <About />
      <Summary />
      <Portfolio />
      <Contact />
    </Fragment>
  );
};

export default Home;
