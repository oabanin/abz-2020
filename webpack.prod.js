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
        usedExports: true,
        minimize: true,
        minimizer: [
            // new TerserPlugin({
            //     terserOptions: {
            //         ecma: undefined,
            //         warnings: false,
            //         parse: {},
            //         compress: {
            //             drop_console: true,
            //         },
            //         mangle: {
            //             toplevel: true,
            //             // properties: false,
            //             properties: {
            //                 regex: /(__[a-zA-Z]+)/,
            //             },
            //             // properties: {
            //             //   regex: /__/g,
            //             // },
            //         }, // Note `mangle.properties` is `false` by default.
            //         module: false,
            //         output: null,
            //         toplevel: false,
            //         nameCache: null,
            //         ie8: false,
            //         keep_classnames: undefined,
            //         keep_fnames: false,
            //         safari10: false,
            //     },
            // }),
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