// Rock Paper Scissors
//
// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.
//
// > rockPaperScissors('rock', 'scissors')
// 'player 1'
// > rockPaperScissors('rock', 'paper')
// 'player 2'
// > rockPaperScissors('paper', 'paper')
// 'draw'

function rock(player2) {
  var message = "";
  if (player2 == "scissors") {
    message = "Player 1 wins";
    return message;
  } else {
    message = "Player 2 wins";
    return message;
  }
}

function scissors(player2) {
  var message = "";
  if (player2 == "paper") {
    message = "Player 1 wins";
    return message;
  } else {
    message = "Player 2 wins";
    return message;
  }
}

function paper(player2) {
  var message = "";
  if (player2 == "rock") {
    message = "Player 1 wins";
    return message;
  } else {
    message = "Player 2 wins";
    return message;
  }
}

function rockPaperScissors(throw1, throw2) {
  var message = "";
  if (throw1 == throw2) {
    message = "It's a draw";
  } else if (throw1 == 'rock') {
    message = rock(throw2);
  } else if (throw1 == 'scissors') {
    message = scissors(throw2);
  } else {
    message = paper(throw2);
  }
  console.log(message);
}

// 'Player 1 wins'
rockPaperScissors('rock', 'scissors');

// 'Player 2 wins'
rockPaperScissors('rock', 'paper');

// 'Draw'
rockPaperScissors('paper', 'paper');
