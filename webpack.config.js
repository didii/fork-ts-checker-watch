const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {(env: {[key: string]: string}, options: webpack.Configuration) => import('webpack').Configuration} */
module.exports = (env, options) => {
    console.log('options:', options);
    return {
        mode: 'development',
        entry: './src/index.ts',
        output: {
            filename: '[name].[contenthash].js',
            clean: true,
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [{
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            }],
        },
        plugins: [
            new HtmlWebPackPlugin({ template: './src/index.html' }),
            new ForkTsCheckerWebpackPlugin(),
        ],

        devtool: 'inline-source-map',
        devServer: {
            hot: true,
            historyApiFallback: true,
        },
    }
}
