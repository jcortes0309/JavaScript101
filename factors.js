// Factor a Number
//
// Write a function factors which is given a number and returns an array containing all its factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number

function factors(number) {
  var list = [];
  for (var count = 1; count <= number; count++)
    if (number % count === 0) {
      list.push(count);
    }
    console.log("The factors of " + number + " are: " + list);
}

factors(10);

function factors2(num) {
  var factors = [];
  for (var i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      if (i !== num / i) {
        factors.push(num / i);
      }
    }
  }
  console.log("The factors of " + num + " are: " + factors);
}

factors2(10);
