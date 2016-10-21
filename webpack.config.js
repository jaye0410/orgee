module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
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
    function() {
      this.plugin('watch-run', (watching, callback) => {
        console.log('\033[36m' + 'Build at ' + new Date() + '\033[39m');
        callback();
      });
    }
  ]
}