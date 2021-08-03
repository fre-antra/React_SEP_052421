## This project is a demostration about react + webpack + html + (JSX/babel-loader) + css-loader + HtmlWebpackPlugin, entirelly work flow

- Phase 5: Summary
- `Works on 8/3/2021`

### Dependencies version

- webpack 5

1. Install dependencies.

```bash
$ npm init -y
$ npm install react react-dom
$ npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader html-webpack-plugin
```

2. .gitignore file

```bash
node_modules
```

3. ./public/index.html `(add html file)`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Phase5-Summary</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3. ./src/index.js `(add index.js)`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

import './index.css';

ReactDOM.render(
  React.createElement(HelloMessage, {
    message:
      '< Html + React + Webpack + JSX + Babel-loader + CSS-loader + Plugin >',
  }),
  document.getElementById('root')
);
```

4. ./src/components/HelloMessage.js `add component`

```js
import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    return <h2>{this.props.message} success!</h2>;
  }
}
```

5. ./src/index.css `add css file`

```css
body {
  color: white;
  background-color: grey;
}
```

6. ./src/webpack.config.js `add webpack configuration.`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
    }),
  ],
};
```

7. ./src/babel.config.json `add babel configuration.`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

8. add scripts.

```json
"scripts": {
  "build": "webpack"
}
```

9. Run the html file.

```bash
$ npm run build
$ cd dist
$ open index.html
```

10. 实施重点

```diff
+ 因为 webpack 的配置比较多，所以理清文件结构很重要，尤其是初学者可以先记住常用格式和结构，熟练后再改动。
```
