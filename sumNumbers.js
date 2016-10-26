// Sum the numbers
//
// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.
//
// > sumNumbers([1, 4, 8])
// 13

function sumNumbers(array) {
  var sum = 0;
  var number = 0;
  for (var i = 0; i < array.length; i++) {
    number = Number(array[i]);
    sum += number;
  }
  console.log(sum);
}

sumNumbers([1, 4, 8]);
