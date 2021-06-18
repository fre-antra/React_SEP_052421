## This project is just for react + webpack + html + babel. (plus jsx syntax, css files and image files.)

1. install dependencies

```bash
$ mkdir webpack-react-starter
$ cd webpack-react-starter
$ npm init -y

$ npm install react react-dom

# webpack
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save-dev autoprefixer
$ npm install --save-dev html-webpack-plugin

# babel(jsx compiler)
$ npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

# webpack css
$ npm install --save-dev css-loader style-loader postcss-loader postcss --save-dev

# webpack image loader
$ npm install --save-dev file-loader url-loader
```

2. ./src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React-01</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3. ./src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

import MyImage from '../assets/loki.png';
import './index.css';

const App = () => {
  return (
    <div>
      <h2>Welcome to React-01</h2>
      <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

4. ./src/index.css

```css
body {
  margin: 50;
  padding: 50;
}

div {
  color: white;
  background-color: teal;
}

img {
  width: 100%;
}
```

5. babel part

```bash
$ touch .babelrc
```

6. ./.babelrc

```json
{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
```

7. package.json, `webpack version > 5`

```json
{
  "name": "react-01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open --hot --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.5",
    "@babel/preset-react": "^7.14.5",
    "autoprefixer": "^10.2.6",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.6",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.1",
    "postcss": "^8.3.5",
    "postcss-loader": "^6.1.0",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^5.39.1",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  }
}
```

8. webpack part, `this version work on 6/17/2021`

- ./src/webpack.config.js

```js
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer', {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
```

9.

```bash
$ npm run start
```
