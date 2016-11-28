// 2016.10.31(git upgrade)
module.exports = {
	//entry: './src/app.js',
	entry: {
    app: './src/app.js',
    todo1: './src/todo1.js',
    //other: './src/other.js'
	},
	output: {
	  filename: '[name].bundle.js',
	  path: './public'
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
