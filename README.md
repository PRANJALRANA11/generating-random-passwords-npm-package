# datetime-utils

`datetime-utils` is a simple npm package that provides common date and time-related operations for JavaScript applications. It is designed to simplify tasks like getting the current date and time, calculating time differences, and formatting dates for display.

## Installation

You can install `datetime-utils` using npm or yarn:

```bash
npm install datetime-utils
# or
yarn add datetime-utils
```

## Usage

To use `datetime-utils` in your JavaScript project, require it at the top of your file:

```javascript
const { getCurrentDateTime, calculateDateDifference, formatDate } = require('datetime-utils');
```

### `getCurrentDateTime()`

This function returns the current date and time as a JavaScript `Date` object.

```javascript
const now = getCurrentDateTime();
console.log(`Current Date and Time: ${now}`);
```

### `calculateDateDifference(startDate, endDate)`

Calculate the difference in seconds between two date strings or `Date` objects.

```javascript
const startDate = '2023-09-09T00:00:00Z';
const endDate = '2023-09-10T12:00:00Z';
const difference = calculateDateDifference(startDate, endDate);
console.log(`Time Difference (seconds): ${difference}`);
```

### `formatDate(date)`

Format a `Date` object into a human-readable date string.

```javascript
const formattedDate = formatDate(now);
console.log(`Formatted Date: ${formattedDate}`);
```

## Example

Here's a complete example of using `datetime-utils`:

```javascript
const { getCurrentDateTime, calculateDateDifference, formatDate } = require('datetime-utils');

const now = getCurrentDateTime();
console.log(`Current Date and Time: ${now}`);

const startDate = '2023-09-09T00:00:00Z';
const endDate = '2023-09-10T12:00:00Z';
const difference = calculateDateDifference(startDate, endDate);
console.log(`Time Difference (seconds): ${difference}`);

const formattedDate = formatDate(now);
console.log(`Formatted Date: ${formattedDate}`);
```

## License

This package is open-source and available under the [MIT License](LICENSE).

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/PRANJALRANA11/time-utils-npm-package/issues) on our GitHub repository. We welcome contributions from the community.

## Author

- Pranjal Rana
- GitHub: (https://github.com/PRANJALRANA11)

---


