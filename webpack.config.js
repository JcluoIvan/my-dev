const path = require('path');
const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/App.jsx')
    ],
    output: {
        path: path.resolve('./www'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json', '.less']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loaders: ['react-hot', 'babel'],                
                // loaders: ['babel'],                
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src')
            }, {
                test: /(\.scss|\.css)$/,
                // loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
            },
            { 
                test: /\.less$/, 
                loader: "style!css!less"
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            { test: /\.css$/, loader: 'style!css' },
            // { test: /\.png$/,  loader: "url-loader?limit=1000" },
            // { test: /\.jpg$/,  loader: "url-loader?limit=1000" },
            // { test: /\.gif$/,  loader: "url-loader?limit=1000" },
            // { test: /\.woff$/, loader: "url-loader?limit=1000" }
        ]
    },
    // postcss: [autoprefixer],
    plugins: [
        // new ExtractTextPlugin('[name].css'),
        // new ExtractTextPlugin('spec.css', { allChunks: true }),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ]
};