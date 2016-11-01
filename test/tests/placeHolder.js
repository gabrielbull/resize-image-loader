const chai = require('chai');
const runWebpack = require('../includes/runWebpack');
const path = require('path');
const fs = require('fs');
var sizeOf = require('image-size');

describe('Place Holder', () => {
  it('it should resize to 200 and be encoded as base64', done => {
    runWebpack(path.join(__dirname, '..', 'entry', 'placeHolder.js'))
      .then(assets => {
        fs.readFile(assets[0].file, 'utf8', function (err, data) {
          if (err) throw err;
          chai.expect(data).to.match(/data:([A-Za-z-+\/]+);base64,/);
          var matches = data.match(/data:([A-Za-z-+\/]+);base64,(.+)"\n/);
          const file = path.join(__dirname, '..', 'images', 'base64.jpg');
          fs.writeFile(
            file,
            new Buffer(matches[2], "base64"),
            function(err) {
              chai.expect(200).to.equal(sizeOf(file).width);
              done();
            }
          );
        });
      })
  });

  it('it should override the file loader', done => {
    runWebpack(path.join(__dirname, '..', 'entry', 'placeHolder.js'), ['file'])
      .then(assets => {
        fs.readFile(assets[0].file, 'utf8', function (err, data) {
          if (err) throw err;
          chai.expect(data).to.match(/data:([A-Za-z-+\/]+);base64,/);
          var matches = data.match(/data:([A-Za-z-+\/]+);base64,(.+)"\n/);
          const file = path.join(__dirname, '..', 'images', 'base64.jpg');
          fs.writeFile(
            file,
            new Buffer(matches[2], "base64"),
            function(err) {
              chai.expect(200).to.equal(sizeOf(file).width);
              done();
            }
          );
        });
      })
  });
});
