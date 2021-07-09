import HomePage from '../pages/home-page';
import PortfolioPage from '../pages/portfolio-page';
import ContactPage from '../pages/contact-page';

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/portfolio",
        exact: true,
        component: PortfolioPage
    },
    {
        path: "/contact",
        exact: true,
        component: ContactPage
    },
];

export default routes;