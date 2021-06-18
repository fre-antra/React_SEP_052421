const path = require("path");
const SRC_DIR = __dirname
const DIST_DIR = path.join(__dirname, './public')

// console.log("SRC_DIR", `${SRC_DIR}/index.js`, "dir", DIST_DIR);
module.exports = {
  //entry point. webpack will start from index.js as the entry point
  entry: `${SRC_DIR}/index.js`,
  //bundle file.  all files will be bundled into a file called bundle.js and copied to /dist folder
  output: {
    filename: "main.js",
    path: DIST_DIR,
  },
  mode: "development",
  //resolve: webpack will resolve to .js and .jsx extensions
  resolve: {
    extensions: [".js"],
  },
  //module: this are the loader rules that will be considered.
  // For js files, webpack should use the babel-loader.
  module: {
    rules: [
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};