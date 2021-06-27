const htmlWebpackPlugin = require('html-webpack-plugin');
const {SourceMapDevToolPlugin} = require('webpack')
const path = require('path');
const webpack = require('webpack')

module.exports = {
	entry: './src/index.tsx',
	mode: 'production',
	output:{
		filename: '[name]-[fullhash].js',
		path: path.resolve(__dirname, 'build', 'static')
	},
	plugins:[
		new htmlWebpackPlugin({
			filename: path.resolve(__dirname, 'build', 'templates', 'index.html'),
			template: path.resolve(__dirname, 'src', 'index.html'),
			publicPath: '/static/'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: [".js", ".json", ".ts", ".tsx", ".sass",".css"],
	},
	module:{
		rules:[
			{enforce: 'pre', test:/\.js$/, loader: "source-map-loader"},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				use:[
					'style-loader',
					"css-modules-typescript-loader",
					'css-loader'
				]
			},
			{
				test: /\.sass$/,

				use:[
					"style-loader",
					"css-loader",
					"sass-loader"
				]

			},
			{
				test: /\.css$/,

				use:[
					"style-loader",
					"css-loader",
				]
			},

		]
	}
}