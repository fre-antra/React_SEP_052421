## This project is a demostration about react + webpack + html. (without jsx syntax, css files and webpack plugin.)

- `Works on 6/18/2021`

### Dependencies version

- webpack 5

1. Install dependencies.

```bash
$ npm init -y

$ npm install react react-dom
$ npm install --save-dev webpack webpack-cli
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

3. ./src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

ReactDOM.render(
  React.createElement(HelloMessage, {
    message: '< Html + React + Webpack >',
  }),
  document.getElementById('root')
);
```

4. ./src/components/HelloMessage.js

```js
import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    return React.createElement('h2', null, this.props.message, ' success!');
  }
}
```

5. package.json, add scripts.

```json
"scripts": {
  "build:webpack": "webpack"
}
```

6. ./src/webpack.config.js

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

7. Run the html file.

```bash
$ npm run build:webpack
$ cd public
$ open index.html
```

8. 总结：

```diff
+ 这个项目展示的是如何使用 webpack 把 js(非 JSX ) 和 react 还有 html 捆绑起来运行。
```
