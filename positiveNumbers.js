// Just the positives
//
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
//
// > positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// > positiveNumbers([1, 2, 3])
// [1, 2, 3]
// > positiveNumbers([-1, -2, -3])
// []

function positiveNumbers(array) {
  var new_array = [];
  var number = 0;
  for (var i = 0; i < array.length; i++) {
    number = Number(array[i]);
    if (number >= 0) {
      new_array.push(number);
    }
  }
  console.log(new_array);
}

positiveNumbers([1, -3, 5, -3, 0]);

positiveNumbers([1, 2, 3]);

positiveNumbers([-1, -2, -3]);
