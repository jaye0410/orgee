var webpack = require('webpack');

module.exports = {
	entry: {
    main: './src/app.js',
    sub: './src/sub.js',
    other: './src/other.js'
	},
	output: {
	  filename: '[name].bundle.js',
	  path: './dist'
	},
/*
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
*/
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.js*/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}