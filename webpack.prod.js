// const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //плагин бандлинга css в отдельный файл
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //  плагин генерации html файла (автоматически или по шаблону,можно использовать шаблонизаторы)

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/abz-2020/',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js'     // названия чанков js. Используются при динамических импортах  вендорных библиотек, REact-lazy или другого отдел ( или нескольних entry points с dependsOn)для Code Splitting, без этой опции будут похожи на filename. magicComments (webpackChunkName) работает если есть name 
    },
    optimization: {
        splitChunks: {
            chunks: 'all',

        },

        usedExports: true,
        minimize: true, // false - отключить минимизацию, по умолчанию используется
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    module: {
        rules: [
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',    //используятся при синхронных импортах
            chunkFilename: 'css/[id].[contenthash].css', // названия чанков  css

        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html", // файл-шаблон в который пихается бандл (если не указать создастся дефолтный без разметки)
            filename: "./index.html",        //итоговое название файла
            /**
             * Note: You can do HTLM minification here OR in `html-loader` - but not both.
             *
             * Exact filesize reduction may vary depending on settings used in each.
            */
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyURLs: true,
            },
        }),
    ],
})