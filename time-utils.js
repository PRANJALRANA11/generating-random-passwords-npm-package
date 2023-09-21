// time-utils.js

function getCurrentDateTime() {
  return new Date();
}

function calculateDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInMilliseconds = end - start;
  const differenceInSeconds = differenceInMilliseconds / 1000;
  return differenceInSeconds;
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

module.exports = { getCurrentDateTime, calculateDateDifference, formatDate };

