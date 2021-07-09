import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from './router';
import Header from './common/header';
import Footer from './common/footer';

export default memo(function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                {renderRoutes(routes)}
                <Footer />
            </BrowserRouter>
        </div>
    )
})
