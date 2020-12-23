// const path = require('path')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //плагин бандлинга css в отдельный файл
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //  плагин генерации html файла (автоматически или по шаблону,можно использовать шаблонизаторы)

module.exports = merge(common, {
    mode: 'production',
    output: { publicPath: '/abz-2020/' },
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
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].[hash].css',    //используятся при синхронных импортах
        //     chunkFilename: 'css/[id].[hash].css', // Чанки css. Используются при динамических импортах
        // }),

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