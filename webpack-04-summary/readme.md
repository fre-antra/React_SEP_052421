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

11. 8/4 webpack async 补充：

- 添加 babel 处理 async 的功能，也就是解决问题

```diff
- Error: regeneratorRuntime is not defined
```

- 方案：[Click here.](https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj)

12. 8/4 webpack server & proxy 补充：

- 添加 react frontend 的 webpack server 功能，并添加对应后端的 proxy。

- 方案：

  - [npm webpack-dev-server.](https://www.npmjs.com/package/webpack-dev-server)
  - [添加 script](https://stackoverflow.com/questions/40379139/cannot-find-module-webpack-bin-config-yargs),`解决错误：Cannot find module 'webpack/bin/config-yargs'`
  - [添加 proxy](https://riptutorial.com/webpack/example/30415/using-proxy)

- 具体代码：

  1. 安装 webpack-dev-server

  ```bash
  $ npm install webpack-dev-server --save-dev
  ```

  2. 添加 script：(./client/package.json)

  ```json
  "scripts": {
    "start": "webpack serve"
  },
  ```

  3. 添加 proxy。(./webpack.config.js)

  - `这里要重点讲的是，webpack serve 命令直接把 client 的端口放在 8080， 而这一步的 proxy 设置主要是用于沟通后端的端口`。

  ```js
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      },
    }
  }
  ```

  - 以上这个配置就是告诉 react 每当向后端发送请求时，`/`路径代表`http://localhost:3000`，也就是后端的端口。
