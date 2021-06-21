## This project is a demostration about react + webpack + html + (JSX/babel-loader) + css-loader + HtmlWebpackPlugin

- Phase 4: webpack + loader + HtmlWebpackPlugin
- `Works on 6/19/2021`

### Dependencies version

- webpack 5

1. Install dependencies. `(add HtmlWebpackPlugin).`

```bash
$ npm init -y

$ npm install react react-dom
$ npm install --save-dev webpack webpack-cli

$ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

$ npm install --save-dev css-loader style-loader

$ npm i --save-dev html-webpack-plugin
```

2. ./public/index.html `(delete script tag)`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Phase4-plugin</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3. ./src/index.js `(add message)`

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

4. ./src/webpack.config.js `(add HtmlWebpackPlugin).`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
    }),
  ],
};
```

4. Run the html file.

```bash
$ npm run build
$ cd dist
$ open index.html
```

5. 总结，相对于 phase 3 ，改变如下：

```diff
+ 增加 npm HtmlWebpackPlugin 的安装
- 删除 index.html 中的 script 部分。
+ index.js 向下传输的参数改变
+ web.config.js 文件中加入了 HtmlWebpackPlugin 的配置。
+ 最后运行文件是 ./dist/index.html
```

6. 为什么要加入 HtmlWebpackPlugin？

- 自动生成 dist 下面的 html 文件，并自动添加 script tag。
- html-webpack-plugin 的作用是：当使用 webpack 打包时，创建一个 html 文件，并把 webpack 打包后的静态 js 文件自动加入到这个 html 文件当中。
