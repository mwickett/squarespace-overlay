var webpack = require("webpack");
module.exports = {
    resolve: {
        root: __dirname
    },


    entry: {
        app: [
            // Source JavaScript entry point.
            "./js/src/app.js"
        ]
    },


    output: {
        path: "./sqs_template/scripts/",
        filename: "app.js"
    },


    module: {
        loaders: [
            {
                test: /js\/lib\/hobo\/dist.*\.js$/,
                loader: "expose?$!expose?jQuery"
            },
            {
                test: /js\/src\/.*\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    // https://github.com/babel/babel-loader#options
                    // cacheDirectory: true,
                    presets: [
                        "es2015",
                        "stage-0"
                    ],
                    plugins: [
                        "add-module-exports"
                    ]
                }
            }
        ]
    },


    plugins: [
        new webpack.ProvidePlugin({
            Promise: "exports?global.Promise!es6-promise",
            fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
        })
    ]
};