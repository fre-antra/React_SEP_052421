const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        // chunkFilename: '[id].js',
        // publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer', {}, ],
                                ],
                            },
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/,
            //     loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            // }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};



// entry: webpack will start from index.js as the entry point

// output: all files will be bundled into a file called bundle.js and copied to /dist folder

// resolve: webpack will resolve to .js and .jsx extensions

// module: this are the loader rules that will be considered. For js files, webpack should use the babel-loader.    
//          For css, use style-loader with css-loader and postcss-loader. Finally for images, use the url-loader.

// plugins: use the HtmlWebpackPlugin with index.html to inject the body

// mode: builr-in optimization accordingly (development, production)

// loader works before bundling / plugins happends after bundling