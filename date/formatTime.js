/**
 * Properties with corresponding values that may contain `toLocaleTimeString`'s `options` param:
 * * `timeZone` - [List of Time Zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
 * `hour12` - `true`, `false`
 * `hour` - "numeric", "2-digit"
 * `minute` - "numeric", "2-digit"
 * `second` - "numeric", "2-digit"
 * */

const {CURRENT_DATE, TIME_OPTIONS} = require('./index');

console.log(CURRENT_DATE.toLocaleTimeString('en-US', TIME_OPTIONS)); //12:12:50 PM

console.log(
  CURRENT_DATE.toLocaleTimeString('en-US', {
    timeZone: 'America/Los_Angeles'
  })
); // 1:12:50 AM
