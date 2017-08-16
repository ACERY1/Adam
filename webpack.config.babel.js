/**
 * Created by Acery on 2017/8/15.
 */
import  webpack from 'webpack'

const config = {
	entry: {
		main: './main.js'
	},
	output: {
		filename: 'build.js',
		path: __dirname + '/build'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			}
		]
	}
};

export default config

