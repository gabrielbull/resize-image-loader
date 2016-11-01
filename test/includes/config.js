const path = require('path');

module.exports = function (entry, loaders) {
  return [
    {
      entry: entry,
      output: {
        path: path.join(__dirname, '..', 'output'),
        publicPath: '/',
        filename: '[name].js'
      },
      resolveLoader: {
        alias: {
          'resize': path.join(__dirname, '..', '..', 'index.js')
        }
      },
      module: {
        loaders: [
          {
            test: /.*\.(gif|png|jpg)$/,
            loaders: loaders
          }
        ]
      }
    }
  ];
}
