# overall-loan-cost [![Build Status](https://secure.travis-ci.org/cfpb/overall-loan-cost.png?branch=master)](http://travis-ci.org/cfpb/overall-loan-cost)

[![browser support](https://ci.testling.com/cfpb/overall-loan-cost.png)
](https://ci.testling.com/cfpb/overall-loan-cost)

> Calculate the overall cost of a loan.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install overall-loan-cost --save
```

## Usage

## Basic usage

Require the module and pass it an object of loan values (amount borrowed, rate, and total loan term in months):

```javascript
var cost = require('overall-loan-cost');

cost({
  amountBorrowed: 300000,
  rate: 4.25,
  totalTerm: 360,
});
```

This will return the total cost of the loan, total equity of the loan, and the overall cost of the loan (cost + equity):

```javascript
{
  totalCost: 231295.08,
  totalEquity: 300000,
  overallCost: 531295.08
}
```

## Additional values

You can also include the down payment and closing costs of the loan.

```javascript
cost({
  amountBorrowed: 300000,
  rate: 4.25,
  totalTerm: 360,
  downPayment: 20000,
  closingCosts: 30000
});
```

Will return:

```javascript
{
  totalCost: 261295.08,
  totalEquity: 320000,
  overallCost: 581295.08
}
```

If you're interested in seeing the costs of a loan for a period that is shorter than the total life of the loan, you can pass the `amortizeTerm` value in months:

```javascript
cost({
  amountBorrowed: 255000,
  rate: 4.5,
  totalTerm: 360,
  amortizeTerm: 84,
  downPayment: 45000,
  closingCosts: 6000
})
```

This will return the total cost, total equity, and overall cost after 7 years:

```javascript
{
  totalCost: 81449.02,
  totalEquity: 78082.98,
  overallCost: 159531.99
}
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```
