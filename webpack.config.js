const path = require('path');


const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //плагин очистки dist
const HtmlWebpackPlugin = require('html-webpack-plugin');       //плагин генерации html файла (автоматически или по шаблону,можно использовать шаблонизаторы)

const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //плагин бандлинга css в отдельный файл  
//Плагины запускаются после лоадеров

// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');


module.exports = {
  entry: {
    "abz-app": './src/index.js',
    //print: './src/print.js',
    //styles: './src/sass/style.scss'
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'), //ПАПКА куда кладет файл js
    filename: 'js/[name].bundle.js',       //имя СБОРКи
    chunkFilename: 'js/[id].[hash].js'     // Чанки js. Используются при динамических импортах вендорных библиотек
  },

  module: { //LOADERS
    rules: [
      {
         test:/\.(js|jsx)$/,
         exclude:/node_modules/,
         use: {
           loader:'babel-loader',
         },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'  //задом наперед, сначала sass-loader (превращает в css), затем postcss-loader, затем css-loader, затем MiniCssExtractPlugin.loader
        ]
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]', 
            },
          },
          //  Image compress
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65
          //     },
          //     // optipng.enabled: false will disable optipng
          //     optipng: {
          //       enabled: false,
          //     },
          //     pngquant: {
          //       quality: [0.65, 0.90],
          //       speed: 4
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //     // the webp option will enable WEBP
          //     // webp: {
          //     //   quality: 75
          //     // }
          //   }
          // },
        ],
      },


      // {
      //   test: /\.pug$/,
      //   use: [
      //     {
      //       loader: 'pug-loader',
      //       options: {
      //         pretty: true
      //       }
      //     },
      //   ]
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [{
	     //        loader: 'file-loader',
	     //        options: {
	     //          name: 'fonts/[name].[hash].[ext]', //if [path] path goes from src, node_modules etc.
	     //        },
	     //      },
      //   	],
      // },

      // //Compile SCSS to separateCSS without Plugin
      // {  
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: { outputPath: '', name: '[name].min.css' }
      //     },
      //     'sass-loader'
      //   ]
      // },


      
      // { 
      //   test: /checked\.svg$/, 
      //   loader: 'svg-inline-loader' 
      // },



        //SVG as data: data:image/svg+xml
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'svg-url-loader',
      //       options: {
      //         limit: 10000,
      //       },
      //     },
      //   ],
      // },



      // //SCSS to js bundle
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     'style-loader',
      //     // Translates CSS into CommonJS
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //     {
      //       loader: 'sass-loader', // Compiles Sass to CSS
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },// End SCSS to js bundle

    ],//End rules
  },//End Module

  plugins: [
     new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',    //используятся при синхронных импортах
      chunkFilename: 'css/[id].[hash].css', // Чанки css. Используются при динамических импортах
    }),

     new HtmlWebpackPlugin({
     template:"./public/index.html", // файл-шаблон в который пихается бандл (если не указать создастся дефолтный без разметки)
     filename:"./index.html"    //итоговое название файла
   }),

  //   //inline SVG 
  //   new HtmlWebpackInlineSVGPlugin({
  //       runPreEmit: true, //If true plugin doesn't needy any loader
  //   }),

  ],
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    overlay: true,
    port: 9001,
    open: true //открыть браузер по окончанию старта сервера
  },

  resolve: {
    alias: {
      "~assets": path.resolve(__dirname, 'public/assets')
    }
  }
};