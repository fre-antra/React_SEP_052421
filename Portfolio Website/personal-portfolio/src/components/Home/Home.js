import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Summary from './Summary/Summary';
import Main from "./Main/Main";
export default function Home() {
  return (
    <div>
      <Main />
      <AboutMe />
      <Summary />
    </div>
  )
}
