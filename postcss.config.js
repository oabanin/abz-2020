module.exports = {
  plugins: [
    require('autoprefixer'), //выполняется первым 
    require('css-mqpacker'),     //media запросы в один файл
    require('cssnano')(
      {
        preset: ["default",
          {
            uniqueSelectors: false,
            zindex: false,
            autoprefixer: false,
            cssDeclarationSorter: false,
            rawCache: false,
            calc: false,
            colormin: false,
            convertValues: false,
            discardComments: false,
            discardDuplicates: false,
            discardEmpty: false,
            discardOverridden: false,
            discardUnused: false,
            mergeIdents: false,
            mergeLonghand: false,
            mergeRules: false,
            minifyFontValues: false,
            minifyGradients: false,
            minifyParams: false,
            minifySelectors: false,
            normalizeCharset: false,
            normalizeDisplayValues: false,
            normalizePositions: false,
            normalizeRepeatStyle: false,
            normalizeString: false,
            normalizeTimingFunctions: false,
            normalizeUnicode: false,
            normalizeUrl: false,
            normalizeWhitespace: false,
            orderedValues: false,
            reduceIdents: false,
            reduceInitial: false,
            reduceTransforms: false,
            svgo: false,
            uniqueSelectors: false,
            zindex: false,

            discardComments: {
              removeAll: true,

            }
          }
        ],
      }),	// минификация
  ]
};


