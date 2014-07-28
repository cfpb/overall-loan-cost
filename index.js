/*
 * overall-loan-cost
 * calculate the overall cost of a loan over its life or a given period
 * @param {object} opts
 * opts = {
 *    amount: num,
 *    rate: num,
 *    totalTerm: num,
 *    amortizeTerm: num,
 *    downPayment: num,
 *    closingCosts: num
 * }
 * @returns number
 */

'use strict';

var amortize = require('amortize');

module.exports = function(opts) {
  var amortizedVal,
      totalCost,
      totalEquity,
      overallCost;

  if (typeof opts.amortizeTerm === 'undefined') {
    opts.amortizeTerm = opts.totalTerm;
  }

  console.log(typeof opts.amortizeTerm);

  amortizedVal = amortize({
    amount: opts.amount,
    rate: opts.rate,
    totalTerm: opts.totalTerm,
    amortizeTerm: opts.amortizeTerm
  });

  totalCost = Number(opts.closingCosts) + Number(amortizedVal.interest);
  totalEquity = Number(opts.downPayment) + Number(amortizedVal.principal);
  overallCost = totalCost + totalEquity;

  return overallCost;

};
