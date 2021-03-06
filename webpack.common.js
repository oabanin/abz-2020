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

    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            //modules: true,
                        }
                    }, // Translates CSS into CommonJS
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
            insert: (linkTag) => {
                const preloadLinkTag = document.createElement('link')
                preloadLinkTag.rel = 'preload'
                preloadLinkTag.as = 'style'
                preloadLinkTag.href = linkTag.href
                document.head.appendChild(preloadLinkTag)
                document.head.appendChild(linkTag)
            }
        }),



    ],
}