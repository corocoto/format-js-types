const {CURRENT_DATE} = require('./index');

console.log(`OS locale: ${CURRENT_DATE.toLocaleTimeString()}`);

console.log(`en-US locale: ${CURRENT_DATE.toLocaleTimeString('en-US')}`);