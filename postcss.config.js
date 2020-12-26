module.exports = {
  plugins: [
    require('autoprefixer'), //выполняется первым 
    require('css-mqpacker'),     //media запросы в один файл
    require('cssnano')(
      {
        preset: ["default",
          {
            uniqueSelectors: false,
            discardComments: {
              removeAll: true,

            }
          }
        ],
      }),	// минификация
  ]
};


