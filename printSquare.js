// Print a Square
//
// Write a function printSquare which is given a size and prints a square of that size using asterisks.
//
// > printSquare(5)
// *****
// *****
// *****
// *****
// *****

function printSquare(size) {
  var height = size;
  var width = size;
  for (var i = 1; i <= size; i++) {
    var row = "";
    for (var j = 1; j <= size; j++) {
      row = row + "*";
    }
      console.log(row);
  }
}

printSquare(5);
