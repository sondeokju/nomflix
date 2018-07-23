const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    entry: "./index.js",   
    output: {
        path: path.join(__dirname, "out"),
        filename: "potato.js"
    }
};

