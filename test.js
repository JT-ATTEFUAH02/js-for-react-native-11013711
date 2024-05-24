// test.js

const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

// Sample data
const numbers = [1, 2, 3, 4, 5];
const strings = ['Dog', 'Cat', 'Bird', 'Ant', 'Frog'];

// Task 1: Process array of numbers
const processedNumbers = processArray(numbers);
console.log('Processed Numbers:', processedNumbers);

// Task 2: Format array of strings based on processed numbers
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log('Formatted Strings:', formattedStrings);

// Task 3: Create user profiles
const userProfiles = createUserProfiles(strings, formattedStrings);
console.log('User Profiles:', userProfiles);
