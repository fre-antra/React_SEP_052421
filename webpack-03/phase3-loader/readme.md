## This project is just for react + webpack + html + (JSX/babel-loader)

- Phase 3: webpack + babel-loader
- `Works on 6/18/2021`

### Dependencies version

- webpack 5

1. Install dependencies. `(diff from phase2).`

```bash
$ npm init -y

$ npm install react react-dom
$ npm install --save-dev webpack webpack-cli

$ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
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

3. ./src/index.js `(diff from phase2).`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

ReactDOM.render(
  React.createElement(HelloMessage, {
    message: '< Html + React + Webpack + JSX + Babel-loader >',
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

5. package.json, add scripts. `(diff from phase1)`

```json
"scripts": {
  "build": "webpack"
}
```

6. ./src/webpack.config.js `(diff from phase2).`

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
    ],
  },
};
```

7. ./src/babel.config.json

```json
{
  "presets": ["@babel/preset-env"]
}
```

8. Run the html file. `(diff from phase1).`

```bash
$ npm run build
$ cd public
$ open index.html
```

9. 总结，相对于 phase 2 ，改变如下：

```diff
+ babel 的 npm 安装内容改变
+ index.js 传输的参数改变
+ package.json 的 scripts 改回直接使用 webpack 命令
+ web.config.js 文件中加入了 babel-loader 的配置
```
