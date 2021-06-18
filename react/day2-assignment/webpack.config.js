const path = require("path");
const SRC_DIR = __dirname
const DIST_DIR = path.join(__dirname, './dist')

// console.log("SRC_DIR", `${SRC_DIR}/index.js`, "dir", DIST_DIR);
module.exports = {
  //entry point.
  entry: `${SRC_DIR}/index.js`,
  //bundle file
  output: {
    filename: "main.js",
    path: DIST_DIR,
  },
  mode: "none"
};