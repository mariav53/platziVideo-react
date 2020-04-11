const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	//archivo principal
	entry: "./src/index.js",
	//donde vamos a guardar archivos
	//resultantes luego de la compilacion
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	//extensiones que vamos a utilizar en proyecto
	resolve: {
		extensions: [".js", ".jsx"],
	},
	//reglas necesarias para el proyecto
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
				},
			},
			{
				test: /\.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "./assets/[name].css",
		}),
	],
};
