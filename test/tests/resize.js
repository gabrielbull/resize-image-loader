const chai = require('chai');
const runWebpack = require('../includes/runWebpack');
const path = require('path');

describe('Resize', () => {
  it('it should resize to 200', done => {
    runWebpack(path.join(__dirname, '..', 'entry', 'resize.js'), ['file', 'resize?200'])
      .then(assets => {
        chai.expect(200).to.equal(assets[0].width);
        done();
      })
  });

  it('it should resize to 600', done => {
    runWebpack(path.join(__dirname, '..', 'entry', 'resize.js'), ['file', 'resize?600'])
      .then(assets => {
        chai.expect(600).to.equal(assets[0].width);
        done();
      })
  });
});
