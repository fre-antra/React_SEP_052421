## This project is just for react + webpack + html + (JSX/babel)

- Phase 2: webpack + babel
- `Works on 6/18/2021`

### Dependencies version

- webpack 5

1. Install dependencies. `(diff from phase1).`

```bash
$ npm init -y

$ npm install react react-dom
$ npm install --save-dev webpack webpack-cli

$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
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

3. ./src/index.js `(diff from phase1).`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

ReactDOM.render(
  React.createElement(HelloMessage, {
    message: '< Html + React + Webpack + Babel(JSX) >',
  }),
  document.getElementById('root')
);
```

4. ./src/components/HelloMessage.js `(diff from phase1).`

```js
import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    // JSX
    return <h2>{this.props.message} success!</h2>;
  }
}
```

5. package.json, add scripts. `(diff from phase1).`

```json
"scripts": {
  "build:webpack": "webpack",
  "build:babel":"babel src --out-dir lib",
  "build":"npm run build:babel && npm run build:webpack"
}
```

6. ./src/webpack.config.js `(diff from phase1).`

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/index.js', // changed
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

7. ./src/babel.config.json `new`

```json
{
  "presets": ["@babel/preset-react"]
}
```

8. Run the html file.

```bash
$ npm run build
$ cd public
$ open index.html
```

9. 总结，相对于 phase 1 ，改变如下：

```diff
+ babel 的 npm 安装
+ index.js 传输的参数改变
+ HelloMessage.js 使用了 JSX 语句。
+ package.json 的 scripts 增加了 babel 命令
+ web.config.js 文件中 entry 的位置修改为 babel 生成的文件。
+ 增加 Babel 的配置文件，‘babel.config.json’
```
