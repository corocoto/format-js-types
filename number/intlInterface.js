/**
 * Instead of using `Number.prototype.toLocaleString()` you could also use the `Intl.NumberFormat` constructor and then call the format method to format your numbers.
 * However, that might confusing and may make you question which technique you should use.
 * If you find yourself needing to format many numbers over and over again with the same locale and same options, then using `Intl.NumberFormat` is preferable for performance reasons.
 */

const {NUMBER} = require('./index');

const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'mile-per-hour'
});

console.log(numberFormat.format(NUMBER));