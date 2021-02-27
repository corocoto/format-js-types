const {NUMBER} = require('./index');

console.log(NUMBER.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
})); // $12,345.68

console.log(NUMBER.toLocaleString('de-DE', {
  style: 'currency',
  currency: 'EUR'
})); // 12.345,68 €

console.log(NUMBER.toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB'
})); // 12 345,68 ₽
