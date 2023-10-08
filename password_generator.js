"use strict";
const prompt = require("prompt-sync")();

//calling function
displayFeature();

//Function to ask preferences for passwrod
function displayFeature() {
  console.log("\n");
  console.log(
    `|-----------------------------------------------------------------------------------------------------------------------------|`
  );
  console.log(
    `|---------------------------------------------------- Password Generator -----------------------------------------------------|`
  );
  console.log(
    `|-----------------------------------------------------------------------------------------------------------------------------|`
  );
  toAskPreferences();
  console.log("\n");
  function toAskPreferences() {
    console.log("\n");
    console.log(
      `Use combination of [1,2,3,4] code to generate password and donot forget to enter space after every digit, type exit to close : `
    );

    console.log("\n");
    let choose = [];
    choose = prompt("Enter the combination of code to generate password : ")
      .toString()
      .split(" ");
    if (choose.includes("exit")) {
      return;
    }

    let compare = ["1", "2", "3", "4"];
    let toCheck = [];
    toCheck = choose;
    if (!compare.includes(toCheck[0])) {
      console.log("\n");
      console.log(
        `You have entered wrong combiantion of code, Code must be combination of [1 2 3 4]`
      );
      displayFeature();
    }
    if (!compare.includes(toCheck[1])) {
      console.log("\n");

      console.log(
        `You have entered wrong combiantion of code, Code must be combination of [1 2 3 4]`
      );
      displayFeature();
    }
    if (!compare.includes(toCheck[2])) {
      console.log("\n");

      console.log(
        `You have entered wrong combiantion of code, Code must be combination of [1 2 3 4]`
      );
      displayFeature();
    }
    if (!compare.includes(toCheck[3])) {
      console.log("\n");

      console.log(
        `You have entered wrong combiantion of code, Code must be combination of [1 2 3 4]`
      );
      displayFeature();
    }
    let index1 = choose[0];

    let uppercase = [];
    let lowercase = [];
    let digits = [];
    let special = [];
    if (index1 == "1") {
      let ask = prompt(
        "Enter the no. of Uppercase letter you want : "
      ).toLowerCase();
      uppercase = uppercase.concat(generateUpperCase(ask));
    } else if (index1 == "2") {
      let ask = prompt(
        "Enter the no. of Lowercase letter you want : "
      ).toLowerCase();
      let get = generateLowerCase(ask);
      lowercase = lowercase.concat(get);
    } else if (index1 == "3") {
      let ask = prompt("Enter the no. of digits you want : ");
      digits = digits.concat(generateDigits(ask));
    } else if (index1 == "4") {
      let ask = prompt(
        "Enter the no. of special symbols you want : "
      ).toLowerCase();
      special = special.concat(generateSpecialSymbol(ask));
    }
    ///==========================
    let index2 = choose[1];
    if (index2 == "1") {
      let ask = prompt(
        "Enter the no. of Uppercase letter you want : "
      ).toLowerCase();
      uppercase = uppercase.concat(generateUpperCase(ask));
    } else if (index2 == "2") {
      let ask = prompt(
        "Enter the no. of Lowercase letter you want : "
      ).toLowerCase();
      let get = generateLowerCase(ask);
      lowercase = lowercase.concat(get);
    } else if (index2 == "3") {
      let ask = prompt("Enter the no. of digits you want : ");
      digits = digits.concat(generateDigits(ask));
    } else if (index2 == "4") {
      let ask = prompt(
        "Enter the no. of special symbols you want : "
      ).toLowerCase();
      special = special.concat(generateSpecialSymbol(ask));
    }
    //=========================
    let index3 = choose[2];
    if (index3 == "1") {
      let ask = prompt(
        "Enter the no. of Uppercase letter you want : "
      ).toLowerCase();
      uppercase = uppercase.concat(generateUpperCase(ask));
    } else if (index3 == "2") {
      let ask = prompt(
        "Enter the no. of Lowercase letter you want : "
      ).toLowerCase();
      let get = generateLowerCase(ask);
      lowercase = lowercase.concat(get);
    } else if (index3 == "3") {
      let ask = prompt("Enter the no. of digits you want : ");
      digits = digits.concat(generateDigits(ask));
    } else if (index3 == "4") {
      let ask = prompt(
        "Enter the no. of special symbols you want : "
      ).toLowerCase();
      special = special.concat(generateSpecialSymbol(ask));
    }
    //===============================
    let index4 = choose[3];
    if (index4 == "1") {
      let ask = prompt(
        "Enter the no. of Uppercase letter you want : "
      ).toLowerCase();
      uppercase = uppercase.concat(generateUpperCase(ask));
    } else if (index4 == "2") {
      let ask = prompt(
        "Enter the no. of Lowercase letter you want : "
      ).toLowerCase();
      let get = generateLowerCase(ask);
      lowercase = lowercase.concat(get);
    } else if (index4 == "3") {
      let ask = prompt("Enter the no. of digits you want : ");
      digits = digits.concat(generateDigits(ask));
    } else if (index4 == "4") {
      let ask = prompt("Enter the no. of special symbols you want : ");
      special = special.concat(generateSpecialSymbol(ask));
    }
    let final = finalPassword(uppercase, lowercase, digits, special);
    final = final.join("");
    console.log("____________________Generated Password_________________\n");
    console.log(`[  ${final}  ]`);

    let getLength = final.length;
    if (getLength <= 5) {
      console.log("\n Weak Password");
    } else if (getLength >= 6 && getLength <= 8) {
      console.log("\nMedium Difficuilty");
    } else if (getLength > 8) {
      console.log("\nUnbreakable Strength");
    }

    toAskPreferences();
  }
  return;
}

// Function to generate Uppercase letter on user preferences
function generateUpperCase(number) {
  let alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "W",
    "Y",
    "Z",
  ];

  let randomNumber = [];
  for (let i = 0; i < number; i++) {
    randomNumber.push(Math.floor(Math.random() * 25) + 0);
  }

  let lengthnum = randomNumber.length;
  let UpperCaseLetter = [];
  for (let i = 0; i < lengthnum; i++) {
    UpperCaseLetter.push(alphabets[randomNumber[i]]);
  }
  return UpperCaseLetter;
}

// Function to generate Lowercase letter on user preferences
function generateLowerCase(number, length) {
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "w",
    "y",
    "z",
  ];

  let randomNumber = [];
  for (let i = 0; i < number; i++) {
    randomNumber.push(Math.floor(Math.random() * 25) + 0);
  }

  let lengthnum = randomNumber.length;
  let LowerCaseLetter = [];
  for (let i = 0; i < lengthnum; i++) {
    LowerCaseLetter.push(alphabets[randomNumber[i]]);
  }
  return LowerCaseLetter;
}

// Function to generate Digits on user preferences
function generateDigits(number, length) {
  let randomNumber = [];
  for (let i = 0; i < number; i++) {
    randomNumber.push(Math.floor(Math.random() * 9) + 0);
  }

  return randomNumber;
}

// Function to generate Special character on user preferences
function generateSpecialSymbol(number, length) {
  let specialcharacter = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "?",
    "_",
    ":",
    ";",
    "~",
    "{",
    "}",
    "(",
    ")",
    "[",
    "]",
    "!",
    "+",
    "||",
  ];

  let randomNumber = [];
  for (let i = 0; i < number; i++) {
    randomNumber.push(
      Math.floor(Math.random() * specialcharacter.length - 1) + 0
    );
  }

  let lengthnum = randomNumber.length;
  let symbols = [];
  for (let i = 0; i < lengthnum; i++) {
    symbols.push(specialcharacter[randomNumber[i]]);
  }
  return symbols;
}

//Function to merge uppercase , lowercase, digits, special character to generate final password
function finalPassword(uppercase, lowercase, digits, special) {
  console.log("\n");
  let password = [];
  if (uppercase != null || uppercase != undefined) {
    password = password.concat(uppercase);
    // console.log(password);
  }
  if (lowercase != null || lowercase != undefined) {
    password = password.concat(lowercase);
    // console.log(password);
  }
  if (digits != null || digits != undefined) {
    password = password.concat(digits);
    // console.log(password);
  }
  if (special != null || special != undefined) {
    password = password.concat(special);
    // console.log(password);
  }

  let length = password.length;
  // console.log(length);
  let randomNumber = [];
  for (let i = 0; i < length; i++) {
    randomNumber.push(Math.floor(Math.random() * length) + 0);
  }

  let password2 = [];
  for (let i = 0; i < length; i++) {
    password2.push(password[randomNumber[i]]);
  }

  return password2;
}
