var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('public/css/style.css', {allChunks: true});

module.exports = {
	entry : './src/client.js',
	output : {
		path: __dirname,
		filename:'public/js/bundle.js'
	},
	module :{
		loaders : [
			{
			    test: /\.jsx?$/,
			    loader: 'babel-loader',
			    exclude: /node_modules/,
			    query: {
			        presets: ['es2015','react']
			    }
			},
			//{ test: /\.css$/, loader: "style!css" }
			{ test: /\.css$/i, loader: extractCSS.extract(['css']) },
		]
	},
	plugins: [
		extractCSS
	],
	 watch : true
};