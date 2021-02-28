const {NUMBER} = require('./index');

console.log(`en-US short compact display: ${NUMBER.toLocaleString('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
})}`); //12K

console.log(`ru-RU long compact display: ${NUMBER.toLocaleString('ru-RU', {
  notation: 'compact',
  compactDisplay: 'long'
})}`); //12 тысяч