//package json
 "scripts": {
    "test": "jest"
  },
//timesTwo.js
// Task 1: Code the timesTwo function declaration
function timesTwo(number) {
    return 2 * number;
}
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;

//timesTwo.test.js
const timesTwo = require('./timesTwo');

// Write the first test
test('returns ...', () => {
    expect(timesTwo(10)).toBe(20)
});
