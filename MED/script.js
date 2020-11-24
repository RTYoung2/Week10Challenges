// // MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.

//a variable to input an array of numbers
const Array = [0, 9, 2, 3, 4, 8, 7, 6, 5, 10, 2];

//function to shuffle numbers (skip this step)

// a function to call the index of the random number that is targeted

let userInput = function (nums, value) {
  return nums.indexOf(value);
};

console.log(userInput(Array, 9));

// function target() {
//   return; //value
// }

// function to combine both functions

// console log the array of numbers to input by User
//console.log (targeted number)
