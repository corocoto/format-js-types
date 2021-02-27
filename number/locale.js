const {NUMBER} = require('./index');

console.log(`ru-RU locale: ${NUMBER.toLocaleString()}`); //get the browser's default locale (on my key it looks like: 12 345, 679)

console.log(`en-US locale: ${NUMBER.toLocaleString('en-US')}`); //12,345.679