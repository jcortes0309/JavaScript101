// Caesar Cipher 2
//
// Write a function decipher which is given a string, an offset, and returns the original message.
//
// > decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
// 'Genius without education is like silver in the mine'

function decipher(message, offset) {
  var key = "abcdefghijklmnopqrstuvwxyz"; // cypher key used to decrypt messages
  var index = 0;
  var char = "";
  var new_message = "";
  message = message.toLowerCase();

  for (var i = 0; i < message.length; i++) {
    char = message[i];
    if (char === " ") {
      new_message += " ";
    } else {
      index = (key.indexOf(char) - offset) % key.length;
      if (index < 0) {
        index += 26;
      }
      new_message += key[index];
    }
  }
  new_message = capitalize(new_message);
  console.log(new_message);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
