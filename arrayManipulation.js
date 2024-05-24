// arrayManipulation.js

// Task 1: Process Array
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

// Task 2: Format Array Strings
function formatArrayStrings(stringArr, numberArr) {
    return stringArr.map((str, index) => {
        if (numberArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Export the functions for use in other modules
module.exports = { processArray, formatArrayStrings };
