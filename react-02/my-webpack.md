## This project is just for react + webpack + html. (without jsx syntax, css files and image files.)

1. install dependencies.

```bash
$ mkdir react-02
$ cd react-02
$ npm init -y
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install react react-dom
```

2. ./public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React-02</title>
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
import HelloMessage from './components/HelloMessage';

ReactDOM.render(
  React.createElement(HelloMessage, {
    name: 'Taylor',
  }),
  document.getElementById('root')
);
```

4. ./src/components/HelloMessage.js

```js
import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    return React.createElement('div', null, 'Hello ', this.props.name);
  }
}
```

5. package.json, add scripts.

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open --hot --mode development",
    "build": "webpack --mode production"
  }
```
