
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head >
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Slabo+27px|Roboto|Source+Sans+Pro" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="./boostrap/css/bootstrap.min.css" />
                    <title>Developer</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}