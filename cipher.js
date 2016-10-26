// Caesar Cipher
//
// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
//
// > cipher('Genius without education is like silver in the mine')
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

function cipher(message, offset) {
  var key = "abcdefghijklmnopqrstuvwxyz"; // cypher key used to encrypt messages
  var index = 0;
  var char = "";
  var new_message = "";
  message = message.toLowerCase();

  for (var i = 0; i < message.length; i++) {
    char = message[i];
    if (char === " ") {
      new_message += " ";
    } else {
      index = (key.indexOf(char) + offset) % key.length;
      new_message += key[index];
    }
  }
  new_message = capitalize(new_message);
  console.log(new_message);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

cipher('Genius without education is like silver in the mine', 13);
