const chai = require('chai');
const runWebpack = require('../includes/runWebpack');
const path = require('path');

describe('Hash', () => {
  it('it should generate the same hash everytime', function (done) {
    this.timeout(5000);
    runWebpack(path.join(__dirname, '..', 'entry', 'hash.js'), ['file'])
      .then(assets => {
        setTimeout(() => {
            runWebpack(path.join(__dirname, '..', 'entry', 'hash.js'), ['file'])
              .then(nextAssets => {
                chai.expect(assets[0].file).to.equal(nextAssets[0].file);
                done();
              })
          },
          1000
        )
      })
  });
});
