/**
 * You can provide options such as `minimumFractionDigits` (defaults to 0 or 2 for currency) or `maximumFractionDigits` to control how many fraction digits to use.
 */

const {NUMBER} = require('./index');

console.log(NUMBER.toLocaleString('en-US', {
  style: 'percent',
  minimumFractionDigits: 2
})); //1,234,567.89%