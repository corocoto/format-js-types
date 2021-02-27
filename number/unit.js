/**
 * [Full list of possible units](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier)
 * */

const {NUMBER} = require('./index');

console.log(NUMBER.toLocaleString('en-US', {
  style: 'unit',
  unit: 'mile-per-hour'
})); // 12,345.679 mph

console.log(NUMBER.toLocaleString('ru-RU', {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long'
})); // 12 345,679 литра


