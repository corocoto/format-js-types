/**
 * Properties with corresponding values that may contain `toLocaleDateString`'s `options` param:
 * * `weekday` - "narrow", "short", "long"
 * * `year` - "numeric", "2-digit"
 * * `month` - "numeric", "2-digit", "narrow", "short", "long"
 * * `day` - "numeric", "2-digit"
 */

const {CURRENT_DATE, DATE_OPTIONS} = require('./index');

console.log(CURRENT_DATE.toLocaleDateString('en-US', DATE_OPTIONS)); // Sunday, February 28, 2021

console.log(
  CURRENT_DATE.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
); // Feb 28

console.log(
  CURRENT_DATE.toLocaleDateString('ru-RU', {
    month: 'long'
  })
); // февраль