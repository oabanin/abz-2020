const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin') //  плагин генерации html файла (автоматически или по шаблону,можно использовать шаблонизаторы)

module.exports = merge(common, {
    mode: 'development',
    optimization: {
        usedExports: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        publicPath: '/',
        compress: true,
        overlay: true,
        port: 9001,
        open: true //открыть браузер по окончанию старта сервера
        // Enable this host if you need to access this from another device, like for mobile testing:
        // host: '0.0.0.0',
    },
    module: {
        rules: [
        ],
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: "./public/index.html", // файл-шаблон в который пихается бандл (если не указать создастся дефолтный без разметки)
            filename: "./index.html",    //итоговое название файла
            /**
             * Note: You can do HTLM minification here OR in `html-loader` - but not both.
             *
             * Exact filesize reduction may vary depending on settings used in each.
            */
            minify: false,
        }),
    ],
})