/**
 * Sometimes you want to control how many digits are significant in a number.
 * You might think of this as Frontend Estimation.
 * You can provide a `minimumSignificantDigits` (defaults to 1) or a `maximumSignificantDigits` (defaults to 21).
 * */

const {NUMBER} = require('./index');

console.log(NUMBER.toLocaleString('en-US', {
  maximumSignificantDigits: 1
}));

console.log(NUMBER.toLocaleString('ru-RU', {
  maximumSignificantDigits: 3
}));