## This project is just for react + webpack + html + (JSX/babel-loader) + css-loader

- Phase 3: webpack + babel-loader
- `Works on 6/18/2021`

### Dependencies version

- webpack 5

1. Install dependencies. `(add css loader).`

```bash
$ npm init -y

$ npm install react react-dom
$ npm install --save-dev webpack webpack-cli

$ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

$ npm install --save-dev css-loader style-loader
```

2. ./public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Phase1-origin</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- important -->
    <script src="../dist/main.js"></script>
  </body>
</html>
```

3. ./src/index.js `(add css file & message changed).`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

import './index.css';

ReactDOM.render(
  React.createElement(HelloMessage, {
    message: '< Html + React + Webpack + JSX + Babel-loader + CSS-loader >',
  }),
  document.getElementById('root')
);
```

4. ./src/components/HelloMessage.js

```js
import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    // JSX
    return <h2>{this.props.message} success!</h2>;
  }
}
```

5. ./src/index.css `new`

```css
body {
  color: white;
  background-color: grey;
}
```

6. package.json, add scripts. `(only webpack command.)`

```json
"scripts": {
  "build": "webpack"
}
```

7. ./src/babel.config.json `(add one preset).`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

8. ./src/webpack.config.js `(add css loader module).`

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // changed
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
};
```

9. Run the html file.

```bash
$ npm run build
$ cd public
$ open index.html
```

10. 总结，相对于 phase 2 ，改变如下：

```diff
+ babel 的 npm 安装内容改变
+ 增加了 css loader 的安装
+ index.js 向下传输的参数改变
+ index.js 引进了 css file
+ 增加了一个 css 文件
+ package.json 的 scripts 改回直接使用 webpack 命令
+ web.config.js 文件中加入了 babel-loader 和 css loader 的配置。
+ babel.config.json 内容改变
```
