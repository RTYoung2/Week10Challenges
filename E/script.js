// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

const userInputs = prompt(
  `Give me some Numbers homie, seperated by a comma(,)`
);

var calculateAVG = function (userInputs) {
  var totalNumbers = 0;
  var average = 0;

  //make this an array, convert the array values to number (foreach), calculate the actual average, return the average
  // this is the transition of string to numbers
  var convert = (string) => {
    // console.log(string);
    return (totalNumbers += Number(string));
  };

  // this is an array
  const stringArray = userInputs.split(`,`);
  // stringArray.forEach(Variable);
  //this is invoking step 2
  stringArray.forEach(convert);
  // console.log(totalNumbers);

  // step 3

  average = totalNumbers / stringArray.length;

  return average;
};
console.log(calculateAVG(userInputs));

// var average = function (total, num) {};
// stringArray.forEach((string) => {
//   console.log(string);
//   return Number(string);
// });

// function Variable(string) {
//   console.log(string);
//   return Number(string);
// }

// function averages ([]args){

// }
