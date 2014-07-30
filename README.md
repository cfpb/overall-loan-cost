# overall-loan-cost [![Build Status](https://secure.travis-ci.org/cfpb/overall-loan-cost.png?branch=master)](http://travis-ci.org/cfpb/overall-loan-cost)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/conto.svg)](https://saucelabs.com/u/conto)

> Calculate the overall cost of a loan.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install overall-loan-cost --save
```

## Usage

Require the module and pass it an object of loan values:

```javascript
var cost = require('overall-loan-cost');
cost({
  amountBorrowed: 300000,
  rate: 4.25,
  totalTerm: 360,
  downPayment: 20000,
  closingCosts: 30000
});
```

This will return the total cost of the loan, total equity of the loan, and the overall cost of the loan (cost + equity).

```javascript
{ 
  totalCost: 261295.08,
  totalEquity: 320000,
  overallCost: 581295.08 
}
```

The downPayment and closingCosts values are optional, so:

```javascript
cost({
  amountBorrowed: 300000,
  rate: 4.25,
  totalTerm: 360,
});
```

Will return:

```javascript
{ 
  totalCost: 231295.08,
  totalEquity: 300000,
  overallCost: 531295.08 
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
