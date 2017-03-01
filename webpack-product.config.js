var webpack = require('webpack');

const entries = {
	hello: './src/hello.js',
	hello2: './src/hello2.js',
	helloWithStyle: './src/helloWithStyle.js',
	helloWithEvent: './src/helloWithEvent.js',
  app: './src/app.js',
  todo: './src/todo.js',
};

module.exports = {
	entry: entries,
	output: {
	  filename: '[name].bundle.js',
	  path: './public/js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
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