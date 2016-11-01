const webpack = require('webpack');
const config = require('./config');
var sizeOf = require('image-size');

module.exports = (entry, loaders) => {
  return new Promise((resolve, reject) => {
    webpack(
      config(entry, loaders),
      function (err, result) {
        if (err) return reject(err);
        var assets = [];
        for (let prop in result.stats[0].compilation.assets) {
          if (result.stats[0].compilation.assets.hasOwnProperty(prop)) {
            var file = {
              image: false,
              file: result.stats[0].compilation.assets[prop].existsAt
            };
            if (file.file.match(/\.(gif|png|jpg)$/)) {
              file = Object.assign(file, {
                image: true
              }, sizeOf(file.file));
            }
            assets.push(file);
          }
        }

        resolve(assets);
      }
    )
  });
}
