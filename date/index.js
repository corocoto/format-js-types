const CURRENT_DATE = new Date();

const DATE_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const TIME_OPTIONS = {
  hour12: true,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

module.exports = {
  CURRENT_DATE,
  DATE_OPTIONS,
  TIME_OPTIONS
};