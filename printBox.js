// Print a box
//
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
//
// > printBox(6, 4)
// ******
// *    *
// *    *
// ******

function printBox(width, height) {
  var row = "";
  var i = 1;
  var j = 1;

  for (i; i <= height; i++) {
    if (i == 1) {
      row = "";
      for (j = 1; j <= width; j++) {
        row = row + "*";
      }
        console.log(row);
    } else if (i == height) {
        row = "";
        for (j = 1; j <= width; j++) {
        row = row + "*";
      }
      console.log(row);
    } else {
      row = "";
      for (j = 1; j <= width; j++) {
        if (j == 1) {
          row = row + "*";
        } else if (j == width) {
          row = row + "*";
        } else {
          row = row + " ";
        }
      }
      console.log(row);
    }
  }
}

printBox(6, 4);
