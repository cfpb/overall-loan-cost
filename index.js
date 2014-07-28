/*
 * overall-loan-cost
 * calculate the overall cost of a loan over its life or a given period
 * @param {object}
 * opts = {
 *    amountBorrowed: num,
 *    rate: num,
 *    totalTerm: num,
 *    amortizeTerm: num,
 *    downPayment: num,
 *    closingCosts: num
 * }
 * @returns {object}
 */

'use strict';

var amortize = require('amortize');

module.exports = function(opts) {
  var loanCost = {},
      amortizedVal;

  opts.amortizeTerm = opts.amortizeTerm || opts.totalTerm;
  opts.downPayment = opts.downPayment || 0;
  opts.closingCosts = opts.closingCosts || 0;

  amortizedVal = amortize({
    amount: opts.amountBorrowed,
    rate: opts.rate,
    totalTerm: opts.totalTerm,
    amortizeTerm: opts.amortizeTerm
  });

  loanCost.totalCost = Number(opts.closingCosts) + Number(amortizedVal.interest);
  loanCost.totalEquity = Number(opts.downPayment) + Number(amortizedVal.principal);
  loanCost.overallCost = loanCost.totalCost + loanCost.totalEquity;

  return loanCost;

};