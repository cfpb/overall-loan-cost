'use strict';

var cost = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.overallLoanCost = {
  setUp: function(done) {
    // setup here
    done();
  },
  'Amount, rate, and term': function(test) {
    test.expect(1);
    // tests here
    test.equal(
      cost({amountBorrowed: 300000, rate: 4.25, totalTerm: 360}).overallCost,
      531295.08,
      'should be 531295.08.'
    );
    test.done();
  }
};
