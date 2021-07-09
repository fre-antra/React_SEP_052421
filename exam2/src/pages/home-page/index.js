import React, { memo } from 'react';

import Main from './c-cpns/main';
import About from './c-cpns/about';
import Summary from './c-cpns/summary';
import Portfolio from '../../common/portfolio';
import Contact from '../../common/contact';

export default memo(function HomePage() {
    return (
        <div>
            <Main />
            <About />
            <Summary />
            <Portfolio />
            <Contact />
        </div>
    )
})
