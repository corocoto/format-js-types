const {NEGATIVE_NUMBER} = require('./index');

console.log(
  NEGATIVE_NUMBER.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting',
    signDisplay: 'always'
  })
); // ($12,345.68)
