const {CURRENT_DATE} = require('./index');

console.log(`OS locale: ${CURRENT_DATE.toLocaleDateString()}`)

console.log(`en-US locale: ${CURRENT_DATE.toLocaleDateString('en-US')}`)