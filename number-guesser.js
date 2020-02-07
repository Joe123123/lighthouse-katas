function guesser() {
  let rightAnswer = Math.floor(100 * Math.random());
  let right = false;
  let attempts = 0;
  let obj = {};
  while (!right) {
    let prompt = require("prompt-sync")();
    let answer = prompt("Guess a number:");
    //type q to quit, a for answer
    if (answer === "q") {
      return;
    }
    if (answer === "a") {
      console.log("the answer is " + rightAnswer);
      continue;
    }

    attempts += 1;
    answer = parseInt(answer);

    if (answer === rightAnswer) {
      right = true;
      console.log("You got it! You took " + attempts + " attempts!");
    }
    if (isNaN(answer)) {
      attempts -= 1;
      console.log("Not a number! Try again!");
    }
    if (obj.hasOwnProperty(answer)) {
      attempts -= 1;
      console.log("Already Guessed!");
      continue;
    }
    if (answer < rightAnswer) {
      obj[answer] = 1;
      console.log("Too Low!");
    }
    if (answer > rightAnswer) {
      obj[answer] = 1;
      console.log("Too High!");
    }
  }
}

guesser();
