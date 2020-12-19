const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //плагин бандлинга css в отдельный файл
const resolve = require('./webpack.config.resolve')

module.exports = {
    entry: {
        app: [path.resolve(__dirname, 'src/index.js')],
        // Other entries can be added here to split out heavy files
        // see: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    },
    resolve,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',       //имя СБОРКи
        publicPath: '/',
        chunkFilename: 'js/[id].[contenthash].js'     // названия чанков js. Используются при динамических импортах  вендорных библиотек или другого отдел ( или нескольних entry points с dependsOn)для Code Splitting, без этой опции будут похожи на filename
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // Translates CSS into CommonJS
                    'postcss-loader',
                    'sass-loader'  //задом наперед, сначала sass-loader (превращает в css), затем postcss-loader, затем css-loader, затем MiniCssExtractPlugin.loader
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpe?g|gif|webp)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',    //используятся при синхронных импортах
            chunkFilename: 'css/[id].[contenthash].css', // названия чанков  css
        }),



    ],
}