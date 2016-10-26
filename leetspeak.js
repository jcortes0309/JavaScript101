// Leetspeak
//
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
//
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// > leetspeak('Leet')
// l337

function leetspeak(string) {
  var dict = {'A': 4, 'E': 3, 'G': 6, 'I': 1, 'O': 0, 'S': 5, 'T': 7};
  var char = "";
  var leet_string = "";
  string = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    char = string[i];
    if (char in dict) {
      leet_string += dict[char];
    } else {
        leet_string += char;
    }
  }
  console.log(leet_string);
}

leetspeak('Leet');
