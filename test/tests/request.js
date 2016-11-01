const chai = require('chai');
const runWebpack = require('../includes/runWebpack');
const path = require('path');

describe('Request', () => {
  it('it should resize to 200', done => {
    runWebpack(path.join(__dirname, '..', 'entry', 'request.js'), ['file'])
      .then(assets => {
        chai.expect(200).to.equal(assets[0].width);
        done();
      })
  });
});
