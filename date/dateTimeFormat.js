const {CURRENT_DATE, DATE_OPTIONS, TIME_OPTIONS} = require('./index');

console.log(CURRENT_DATE.toLocaleString('en-US', {
  month: 'short'
})); //Feb

console.log(CURRENT_DATE.toLocaleString('en-US', {
  hour: '2-digit'
})); // 12 PM

console.log(CURRENT_DATE.toLocaleString('en-US', {
  ...DATE_OPTIONS,
  ...TIME_OPTIONS
})); // Sunday, February 28, 2021, 12:18:16 PM
