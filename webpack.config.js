const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEVICE = process.env.DEVICE_TYPE;
console.log(DEVICE);

const cssName = process.env.NODE_ENV === "production" ? "style-[hash].css" : "style.css";
const jsName = process.env.NODE_ENV === "production" ? "bundle-[hash].js" : "bundle.js";
const plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
        }
    }),
    new ExtractTextPlugin("assets/" + cssName),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "app/template.html"),
        filename: `../${DEVICE}/index.html`
    })
];

if (process.env.NODE_ENV === "production") {
    plugins.push(new CleanWebpackPlugin([`dist/${DEVICE}`]))
}

module.exports = {
    entry: path.resolve(__dirname, `app/${DEVICE}/index.js`),
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, `dist/${DEVICE}/`),
        filename: "assets/" + jsName,
        publicPath: "/"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './'),
            path.resolve(__dirname, 'app'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', ".scss"]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, 'app/desktop'),
                                    path.resolve(__dirname, 'app/img'),
                                    path.resolve(__dirname, 'app/desktop/styles'),
                                    path.resolve(__dirname, 'static/fonts'),
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.gif$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=26000&mimetype=image/svg+xml',
            },
            {
                test: /\.(woff|woff2|ttf|eot)/,
                loader: 'url-loader?limit=1',
            },
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        open: true,
        port: 9000,
        contentBase: path.join(__dirname, `../dist/${DEVICE}`)
    }

};