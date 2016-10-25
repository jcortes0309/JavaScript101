// Print a Banner
//
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
//
// > printBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function printBanner(text) {
  var row = "";
  var i = 1;
  var j = 1;
  var width = text.length + 2;
  var height = 3;

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
          row = row + "*" + text;
        } else if (j == width) {
          row = row + "*";
        } else {
          row = row;
        }
      }
      console.log(row);
    }
  }
}


printBanner('Welcome to DigitalCrafts');
