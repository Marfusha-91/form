const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, 'src/index.html')
        }
    ),
    new CleanWebpackPlugin({

    })],
    module: {
        rules: [
             {
                  test: /\.css$/i,
                  use: [
                      'style-loader',
                      'css-loader']
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
        ] } ]
    }

}