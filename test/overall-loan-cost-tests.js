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
    test.equal(
      cost({amountBorrowed: 300000, rate: 4.25, totalTerm: 360}).overallCost,
      531295.08,
      'should be 531295.08.'
    );
    test.done();
  },
  '$200k values': function(test) {
    test.expect(4);
    test.deepEqual(
      cost({
        amountBorrowed: 180000,
        rate: 3.5,
        totalTerm: 360,
        downPayment: 20000,
        closingCosts: 3000
      }),
      {
        totalCost: 113980.96,
        totalEquity: 200000,
        overallCost: 313980.96
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 180000,
        rate: 3,
        totalTerm: 360,
        downPayment: 20000,
        closingCosts: 3000
      }),
      {
        totalCost: 96199.41,
        totalEquity: 200000,
        overallCost: 296199.41
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 180000,
        rate: 3.5,
        totalTerm: 180,
        downPayment: 20000,
        closingCosts: 3000
      }),
      {
        totalCost: 54621.94,
        totalEquity: 200000,
        overallCost: 254621.94
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 160000,
        rate: 3.5,
        totalTerm: 360,
        downPayment: 40000,
        closingCosts: 3000
      }),
      {
        totalCost: 101649.74,
        totalEquity: 200000,
        overallCost: 301649.74
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.done();
  },
  'Various values': function(test) {
    test.expect(4);
    test.deepEqual(
      cost({
        amountBorrowed: 255000,
        rate: 4.5,
        totalTerm: 360,
        downPayment: 45000,
        closingCosts: 3000
      }),
      {
        totalCost: 213137.11,
        totalEquity: 300000,
        overallCost: 513137.11
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 130000,
        rate: 5,
        totalTerm: 360,
        downPayment: 20000,
        closingCosts: 3000
      }),
      {
        totalCost: 124232.52,
        totalEquity: 150000,
        overallCost: 274232.52
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 210000,
        rate: 4.125,
        totalTerm: 180,
        downPayment: 40000,
        closingCosts: 3000
      }),
      {
        totalCost: 74975.75,
        totalEquity: 250000,
        overallCost: 324975.75
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 390000,
        rate: 3.25,
        totalTerm: 360,
        downPayment: 60000,
        closingCosts: 3000
      }),
      {
        totalCost: 224029.67,
        totalEquity: 450000,
        overallCost: 674029.67
      },
      'should return the correct total cost, total equity, and overall cost'
    );
    test.done();
  },
  'Various time horizons': function(test) {
    test.expect(2);
    test.deepEqual(
      cost({
        amountBorrowed: 255000,
        rate: 4.5,
        totalTerm: 360,
        amortizeTerm: 84,
        downPayment: 45000,
        closingCosts: 6000
      }),
      {
        totalCost: 81449.02,
        totalEquity: 78082.98,
        overallCost: 159531.99
      },
      'should return the correct total cost, total equity, and overall cost after 7 years'
    );
    test.deepEqual(
      cost({
        amountBorrowed: 255000,
        rate: 4.5,
        totalTerm: 360,
        amortizeTerm: 144,
        downPayment: 45000,
        closingCosts: 6000
      }),
      {
        totalCost: 128094.40,
        totalEquity: 108960.44,
        overallCost: 237054.85
      },
      'should return the correct total cost, total equity, and overall cost after 12 years'
    );
    test.done();
  }
};
