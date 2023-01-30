const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Webpack.config.js
const HelloWorldPlugin = require("./CustomPlugin");

module.exports = {
	mode: "development",
	devtool: "eval-cheap-module-source-map",
	// entry: "./index.js",
	entry: {
		main: "./index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		// filename: "bundle.js",
		filename: "[name].bundle.js", // [name] 可以替换为 entry 的 key
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HelloWorldPlugin()
	]
};
