var path = require('path');
var webpack = require('webpack');

var output_path = './';
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = {
    entry: {
        'index': './src/index.jsx'
    },
    output: {
        filename: ENV ? '[name].min.js': '[name].js',
        path: output_path,
        library: "PostJson",
        libraryTarget: 'var'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                  presets: ['es2015', 'react']
                } 
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        "react": "React"
    },
    plugins: ENV ? [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ] : []
};
