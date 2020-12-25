module.exports = {
  plugins: [
    require('autoprefixer'), //выполняется первым 
    require('css-mqpacker'),     //media запросы в один файл
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true, //удаляем комментария
          }
        }
      ]
    }),	// минификация
  ]
};


//   autoprefixer css-mqpacker  cssnano