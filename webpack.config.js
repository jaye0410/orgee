// 2016.10.31(git upgrade)
module.exports = {
	//entry: './src/app.js',
	entry: {
		hello: './src/hello.js',
		hello2: './src/hello2.js',
		helloWithStyle: './src/helloWithStyle.js',
		helloWithEvent: './src/helloWithEvent.js',
    app: './src/app.js',
    todo: './src/todo.js',
    //other: './src/other.js'
	},
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
    function() {
      this.plugin('watch-run', (watching, callback) => {
        console.log('\033[36m' + 'Build at ' + new Date() + '\033[39m');
        callback();
      });
    }
  ]
}
