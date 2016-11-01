const chai = require('chai');
const runWebpack = require('../includes/runWebpack');
const path = require('path');

describe('Image Loader', () => {
  it('it should resize to 200 and be optimized', done => {
    runWebpack(path.join(__dirname, '..', 'entry', 'request.js'), ['file', 'image-webpack'])
      .then(assets => {
        chai.expect(200).to.equal(assets[0].width);
        done();
      })
  });
});
