import { Fragment } from 'react';
import Head from 'next/head';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

import '../css/style.css'
import '../css/bootstrap/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head >
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Developer</title>
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </Fragment>
    )
}