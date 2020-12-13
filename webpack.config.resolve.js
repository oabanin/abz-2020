const path = require('path')

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  alias: {
    "~assets": path.resolve(__dirname, 'public/assets'),
    "~components": path.resolve(__dirname, 'src/components'),
  },
}