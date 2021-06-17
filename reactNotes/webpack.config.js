const path = require("path");

module.exports = {
  entry: path.join(__dirname, "build/@babel", "1-react.js"),
  output: { path: path.join(__dirname, "build"), filename: "index.js" },
  mode: process.env.NODE_ENV,
  /*resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },*/
  /*devServer: { contentBase: path.join(__dirname) },*/
  /*module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },*/
  /*plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],*/
};

/*
a. entry and output: 
tells our server what has to be compiled and from where.
Also tells the server where the compiled version should be outputted.

b. mode: 
this is the mode of our output, 
which is set to ‘development’ for now. 
Should be changed to 'production' when the app is build for production.

c. resolve: 
used so that we can import anything from the src folder 
in relative paths rather than the absolute ones, 
same goes for node_modules as well.

d. devServer: 
this tells the webpack-dev-server what files are needed to be served. 
Everything from our src folder needs to be served (outputted) in the browser.

e. plugins: 
here we set what plugins we need in our app. 
As of this moment we only need the html-webpack-plugin which tells the server that the index.bundle.js 
should be injected (or added if you will) to our index.html file

*/
