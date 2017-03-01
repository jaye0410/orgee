const entries = {
	hello: './src/hello.js',
	hello2: './src/hello2.js',
	helloWithStyle: './src/helloWithStyle.js',
	helloWithEvent: './src/helloWithEvent.js',
	sample: './src/sample.js',
  app: './src/app.js',
  todo: './src/todo.js',
};

module.exports = {
	//entry: './src/app.js',
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
    function() {
      this.plugin('watch-run', (watching, callback) => {
        console.log('\033[36m' + 'Build at ' + new Date() + '\033[39m');
        callback();
      });
    }
  ]
};
