// Tip Calculator 3
//
// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
//
// > splitAmount(100, 'good', 5)
// 24
// > splitAmount(40, 'fair', 2)
// 23

function tipAmount(bill, service) {
  if (service == 'good') {
    return (bill * 20) / 100;
  } else if (service == 'fair') {
      return (bill * 15) / 100;
  } else if (service == 'bad') {
      return (bill * 10) / 100;
  } else {
      throw Error("I don't understand the service level. Please provide the service as good, bad, or fair");
  }
}

function totalAmount(bill, service) {
  var tip = tipAmount(bill, service);
  return bill + tip;
}

function splitAmount(bill, service, people) {
  var amount = totalAmount(bill, service);
  return "Total amount per person is $" + Math.round(amount / people);
}

splitAmount(100, 'good', 5);

splitAmount(40, 'fair', 2);
