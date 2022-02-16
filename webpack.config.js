const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
	return {
		entry: './src/index.tsx',
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
				store: path.resolve(__dirname, 'src/store/'),
				components: path.resolve(__dirname, 'src/components/'),
				hooks: path.resolve(__dirname, 'src/hooks/'),
				api: path.resolve(__dirname, 'src/api/'),
				constants: path.resolve(__dirname, 'src/constants/'),
				assets: path.resolve(__dirname, 'src/assets/'),
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
			new Dotenv(),
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
