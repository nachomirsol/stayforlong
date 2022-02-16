const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
	return {
		entry: './src/index.tsx',
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
				components: path.resolve(__dirname, 'src/components/'),
				constants: path.resolve(__dirname, 'src/constants/'),
				styles: path.resolve(__dirname, 'src/styles/'),
			},
		},
		devServer: {
			historyApiFallback: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						// Creates `style` nodes from JS strings
						'style-loader',
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
					],
				},
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
			],
		},
	};
};
