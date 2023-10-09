"use strict";
const prompt = require("prompt-sync")();

console.log("\n");
console.log(`|------------------------------------------------------|`);
console.log(`|----------------- SNAKES AND LADDERS -----------------|`);
console.log(`|------------------------------------------------------|`);

toDisplayPlayerGame1(0, 99, 0, 99);
function toDisplayPlayerGame1(
  previousNumberPlayer1,
  onDiceNumberPlayer1,
  previousNumberPlayer2,
  onDiceNumberPlayer2
) {
  let curentNmuberPlayer1 = previousNumberPlayer1 + onDiceNumberPlayer1;
  console.log("\n");
  console.log(`Player 1 current position ${curentNmuberPlayer1}`);
  console.log("\n");

  let curentNmuberPlayer2 = previousNumberPlayer2 + onDiceNumberPlayer2;
  console.log(`Player 2 current position ${curentNmuberPlayer2}`);
  console.log("\n");

  for (let i = 1; i <= 100; i++) {
    let player1 = "+";
    let player2 = "@";

    if (i <= 9) {
      let flag1 = 1;
      let flag2 = 1;
      let flag3 = 1;
      if (curentNmuberPlayer1 == i && i == curentNmuberPlayer2) {
        process.stdout.write(`${player1}${player2}    `);
        flag1 = 0;
        flag2 = 0;
        flag3 = 0;
      }
      if (flag1 && curentNmuberPlayer1 == i) {
        process.stdout.write(`${player1}     `);
        flag3 = 0;
      }
      if (flag2 && curentNmuberPlayer2 == i) {
        process.stdout.write(`${player2}   `);
        flag3 = 0;
      }
      if (flag3) {
        process.stdout.write(`${i}     `);
      }
    } else {
      let flag1 = 1;
      let flag2 = 1;
      let flag3 = 1;
      if (curentNmuberPlayer1 == i && i == curentNmuberPlayer2) {
        process.stdout.write(`${player1}${player2}   `);
        flag1 = 0;
        flag2 = 0;
        flag3 = 0;
      }
      if (flag1 && curentNmuberPlayer1 == i) {
        process.stdout.write(`${player1}   `);
        flag3 = 0;
      }
      if (flag2 && curentNmuberPlayer2 == i) {
        process.stdout.write(`${player2}     `);
        flag3 = 0;
      }
      if (flag3) {
        process.stdout.write(`${i}    `);
      }
    }
    if (i % 10 == 0) {
      console.log("\n");
    }
  }
  toSpinDice1(0, curentNmuberPlayer1, 0, curentNmuberPlayer2);

  return;
}

function toSpinDice1(
  previousNumberPlayer1,
  onDiceNumberPlayer1,
  previousNumberPlayer2,
  onDiceNumberPlayer2
) {
  let symbolForPlayer1 = "+";

  console.log("\n");
  console.log(`Turn for Player1 - ${symbolForPlayer1}`);
  console.log("\n");
  let command = prompt(
    "Enter [ throw ] command to spin dice, Type [ exit ] to close the game - "
  );
  if (command == "exit") {
    return;
  }
  if (command != "throw") {
    console.log("\n");
    console.log(
      "You have entered the wrong command, please enter the [ throw ] command"
    );
    toSpinDice1(
      previousNumberPlayer1,
      onDiceNumberPlayer1,
      previousNumberPlayer2,
      onDiceNumberPlayer2
    );
  }

  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Player 1 got ${randomNumber} on Dice`);

  let current = randomNumber + onDiceNumberPlayer1;

  let randomNumberOnladder = laddersOfGame(current);

  if (current != randomNumberOnladder) {
    toDisplayPlayerGame2(
      0,
      randomNumberOnladder,
      previousNumberPlayer2,
      onDiceNumberPlayer2
    );
  }
  let randomNumberOnSnakes = snakesOfGame(current);

  if (current != randomNumberOnSnakes) {
    toDisplayPlayerGame2(
      0,
      randomNumberOnSnakes,
      previousNumberPlayer2,
      onDiceNumberPlayer2
    );
  }
  // console.log(current);
  if (current == 100) {
    console.log(
      `|---------------------------------------------------------------------|`
    );
    console.log(
      `|---------------------- PLAYER 1 WON THE GAME ------------------------|`
    );
    console.log(
      `|---------------------------------------------------------------------|`
    );
    return;
  }
  if (current > 100) {
    console.log("Player 1 did not get the number to reach 100");
    toDisplayPlayerGame2(
      previousNumberPlayer1,
      onDiceNumberPlayer1,
      previousNumberPlayer2,
      onDiceNumberPlayer2
    );
  }

  console.log("\n");

  toDisplayPlayerGame2(
    onDiceNumberPlayer1,
    randomNumber,
    previousNumberPlayer2,
    onDiceNumberPlayer2
  );
  return;
}
function toDisplayPlayerGame2(
  previousNumberPlayer1,
  onDiceNumberPlayer1,
  previousNumberPlayer2,
  onDiceNumberPlayer2
) {
  let curentNmuberPlayer1 = previousNumberPlayer1 + onDiceNumberPlayer1;
  console.log("\n");
  console.log(`Player 1 current position ${curentNmuberPlayer1}`);
  console.log("\n");
  let curentNmuberPlayer2 = previousNumberPlayer2 + onDiceNumberPlayer2;
  console.log(`Player 2 current position ${curentNmuberPlayer2}`);
  console.log("\n");
  for (let i = 1; i <= 100; i++) {
    let player1 = "+";
    let player2 = "@";

    if (i <= 9) {
      let flag1 = 1;
      let flag2 = 1;
      let flag3 = 1;
      if (curentNmuberPlayer1 == i && i == curentNmuberPlayer2) {
        process.stdout.write(`${player1}${player2}    `);
        flag1 = 0;
        flag2 = 0;
        flag3 = 0;
      }
      if (flag1 && curentNmuberPlayer1 == i) {
        process.stdout.write(`${player1}     `);
        flag3 = 0;
      }
      if (flag2 && curentNmuberPlayer2 == i) {
        process.stdout.write(`${player2}   `);
        flag3 = 0;
      }
      if (flag3) {
        process.stdout.write(`${i}     `);
      }
    } else {
      let flag1 = 1;
      let flag2 = 1;
      let flag3 = 1;
      if (curentNmuberPlayer1 == i && i == curentNmuberPlayer2) {
        process.stdout.write(`${player1}${player2}   `);
        flag1 = 0;
        flag2 = 0;
        flag3 = 0;
      }
      if (flag1 && curentNmuberPlayer1 == i) {
        process.stdout.write(`${player1}   `);
        flag3 = 0;
      }
      if (flag2 && curentNmuberPlayer2 == i) {
        process.stdout.write(`${player2}     `);
        flag3 = 0;
      }
      if (flag3) {
        process.stdout.write(`${i}    `);
      }
    }
    if (i % 10 == 0) {
      console.log("\n");
    }
  }
  toSpinDice2(0, curentNmuberPlayer1, 0, curentNmuberPlayer2);
  return;
}

function toSpinDice2(
  previousNumberPlayer1,
  onDiceNumberPlayer1,
  previousNumberPlayer2,
  onDiceNumberPlayer2
) {
  let symbolForPlayer2 = "@";
  console.log("\n");
  console.log(`Turn for Player2 - ${symbolForPlayer2}`);
  console.log("\n");
  let command = prompt(
    "Enter [ throw ] command to spin dice, Type [ exit ] to close the game - "
  );
  if (command == "exit") {
    return;
  }

  if (command != "exit") {
    console.log("\n");
    console.log(
      "You have entered the wrong command, please enter the [ throw ] command"
    );
    toSpinDice2(
      previousNumberPlayer1,
      onDiceNumberPlayer1,
      previousNumberPlayer2,
      onDiceNumberPlayer2
    );
  }

  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Player 2 got ${randomNumber} on Dice`);

  let current = randomNumber + onDiceNumberPlayer2;

  let randomNumberOnladder = laddersOfGame(current);

  if (current != randomNumberOnladder) {
    toDisplayPlayerGame1(
      previousNumberPlayer1,
      onDiceNumberPlayer1,
      0,
      randomNumberOnladder
    );
  }
  let randomNumberOnSnakes = snakesOfGame(current);

  if (current != randomNumberOnSnakes) {
    toDisplayPlayerGame1(
      previousNumberPlayer1,
      onDiceNumberPlayer1,
      0,
      randomNumberOnSnakes
    );
  }

  if (current == 100) {
    console.log(
      `|---------------------------------------------------------------------`
    );
    console.log(
      `|---------------------- PLAYER 2 WON THE GAME ------------------------|`
    );
    console.log(
      `|---------------------------------------------------------------------|`
    );
    return;
  }
  if (current > 100) {
    console.log("Player 2 did not get the number to reach 100");
    toDisplayPlayerGame1(
      previousNumberPlayer1,
      onDiceNumberPlayer1,
      previousNumberPlayer2,
      onDiceNumberPlayer2
    );
  }

  console.log("\n");
  toDisplayPlayerGame1(
    previousNumberPlayer1,
    onDiceNumberPlayer1,
    onDiceNumberPlayer2,
    randomNumber
  );
  return;
}

function laddersOfGame(numberToCheckLadder) {
  if (numberToCheckLadder == 4) {
    console.log("You found a ladder! Climbing up.. to 56");
    return 56;
  } else if (numberToCheckLadder == 12) {
    console.log("You found a ladder! Climbing up.. to 50");
    return 50;
  } else if (numberToCheckLadder == 14) {
    console.log("You found a ladder! Climbing up.. to 55");
    return 55;
  } else if (numberToCheckLadder == 22) {
    console.log("You found a ladder! Climbing up.. to 58");
    return 58;
  } else if (numberToCheckLadder == 41) {
    console.log("You found a ladder! Climbing up.. to 79");
    return 79;
  } else if (numberToCheckLadder == 54) {
    console.log("You found a ladder! Climbing up.. to 88");
    return 88;
  } else if (numberToCheckLadder == 74) {
    console.log("You found a ladder! Climbing up.. to 96");
    return 96;
  }

  return numberToCheckLadder;
}

function snakesOfGame(numberToCheckSnakes) {
  if (numberToCheckSnakes == 94) {
    console.log("Oops! A snake caught you. You're moving backward 71");
    return 71;
  } else if (numberToCheckSnakes == 97) {
    console.log("Oops! A snake caught you. You're moving backward 5");
    return 5;
  } else if (numberToCheckSnakes == 75) {
    console.log("Oops! A snake caught you. You're moving backward 32");
    return 32;
  } else if (numberToCheckSnakes == 66) {
    console.log("Oops! A snake caught you. You're moving backward 38");
    return 38;
  } else if (numberToCheckSnakes == 47) {
    console.log("Oops! A snake caught you. You're moving backward 16");
    return 16;
  } else if (numberToCheckSnakes == 37) {
    console.log("Oops! A snake caught you. You're moving backward 3");
    return 3;
  } else if (numberToCheckSnakes == 28) {
    console.log("Oops! A snake caught you. You're moving backward 10");
    return 10;
  } else if (numberToCheckSnakes == 33) {
    console.log("Oops! A snake caught you. You're moving backward 6");
    return 6;
  }

  return numberToCheckSnakes;
}
