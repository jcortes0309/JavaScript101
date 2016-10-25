// Tip Calculator 2
//
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
//
// > totalAmount(100, 'good')
// 120
// > totalAmount(40, 'fair')
// 46

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
  tip = tipAmount(bill, service);
  return "Total amount is $" + (bill + tip);
}

totalAmount(100, 'good');

totalAmount(40, 'fair');
