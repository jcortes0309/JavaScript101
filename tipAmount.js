// Tip Calculator
//
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
//
// good -> 20%
// fair -> 15%
// bad -> 10%
// > tipAmount(100, 'good')
// 20
// > tipAmount(40, 'fair')
// 6

function tipAmount(bill, service) {
  if (service == 'good') {
    return "$" + (bill * 20) / 100;
  } else if (service == 'fair') {
      return "$" + (bill * 15) / 100;
  } else if (service == 'bad') {
      return "$" + (bill * 10) / 100;
  } else {
      return "I don't understand the service level. Please provide the service as good, bad, or fair";
  }
}

tipAmount(100, 'good');

tipAmount(40, 'fair');
