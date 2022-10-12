// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("enigma", () => {
  it("takes in a string and returns a coded message.", () => {
    const secretCodeWord1 = "Lackadaisical";
    // Expected output: "L4ck4d41s1c4l"
    expect(enigma(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    const secretCodeWord2 = "Gobbledygook";
    // Expected output: "G0bbl3dyg00k"
    expect(enigma(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    const secretCodeWord3 = "Eccentric";
    // Expected output: "3cc3ntr1c"
    expect(enigma(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});
// ReferenceError: enigma is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// expected test failure due to enigma not being defined.

// b) Create the function that makes the test pass.

// Alright so initially I looked at this and thought, "this doesn't seem too bad...". I was wrong. I slept on this and I still have no clue where to start so I'm gonna try to split the string to an array, and then use .map to iterate and then use a conditional to check each value.

// enigma function takes in a string and then returns a coded word
const enigma = (string) => {
  // Declare new variable enigmaArr to store the split string
  let enigmaArr = string.split("");
  // Use .map to iterate over the array and assign the result to variable codeWord
  let codeWord = enigmaArr.map((value) => {
    // Conditional statements to check values against the coded letters and change the value to a corresponding number
    if (value === "A" || value === "a") {
      return "4";
    } else if (value === "E" || value === "e") {
      return "3";
    } else if (value === "I" || value === "i") {
      return "1";
    } else if (value === "O" || value === "o") {
      return "0";
    } else {
      return value;
    }
  });
  // Returns codeWord as a string with new code words
  return codeWord.join("");
};

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// I won't say what I really said when I saw this pass, but I'm sure you could imagine.

// The problem was that I was calling the .map correctly, but that wasn't being stored or returned anywhere, so the initial string was being passed through and returned like it was told. Now with codeWord declared, I was able to store the mapped result and return the coded word as a string. What. A. Ride.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("letterFinder", () => {
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];

    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    expect(letterFinder(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);

    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(letterFinder(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// b) Create the function that makes the test pass.

// Ok so I need to declare a function that will accept two parameters: array and string. Array for the fruitArray and string for the letterA and letterE given inputs. I know I'm going to need to iterate over the array, but I know that I can't use map since my expected output is a shorter array. I might use .filter? and then use that to check the array values to see if they contain the letters and then push that as the return.

// Declare new function letterFinder that takes in two arguments: array and string.
const letterFinder = (array, string) => {
  // Declare new variable letterArr to store the filtered array.
  let letterArr = array.filter((value) => {
    // Checks given array against any words that include the string character given.
    return value.toLowerCase().includes(string.toLowerCase());
  });
  // Returns filtered array
  return letterArr;
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// Test passed! I was having an issue where the return was an empty array. It was similar to the issue I was having with the first question, I wasn't telling the function to return the filtered result.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () => {
    const hand1 = [5, 5, 5, 3, 3];
    // // Expected output: true
    expect(fullHouse(hand1)).toEqual(true);

    const hand2 = [5, 5, 3, 3, 4];
    // // Expected output: false
    expect(fullHouse(hand2)).toEqual(false);

    const hand3 = [5, 5, 5, 5, 4];
    // // Expected output: false
    expect(fullHouse(hand3)).toEqual(false);

    const hand4 = [7, 2, 7, 2, 7];
    // Expected output: true
    expect(fullHouse(hand4)).toEqual(true);
  });
});

// ReferenceError: fullHouse is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

// I'm going to need to iterate over the array and run a conditional statement to check the values within the array. I'm not sure about the conditional logic though...

// function fullHouse takes in an array and iterates over the array

// I found this method online and wanted to give it a try but it doesn't really make sense to me honestly. I understand I need to iterate, but the logic of checking the values against each other without hardcoding the numbers is the hardest part for me right now.
// const fullHouse = (array) => {
//   const handCheck = array.slice();
//   for (let i = 0; i < array.length; ) {
//     const el = handCheck.slice(i, 1)[0];
//     if (handCheck.includes(el)) {
//       handCheck.splice(handCheck.indexof(el), 1);
//       if (handCheck.includes(el)) {
//         return true;
//       }
//     } else {
//       i++;
//     }
//   }
//   return false;
// };

const fullHouse = (array) => {
  // .sort orders the array to make the conditional check easier.
  array.sort((a, b) => a - b);
  // fullHouse hand conditional check, where the first three indexes match and the last two indexes match
  if (
    array[0] === array[1] && 
    array[0] === array[2] && 
    array[3] === array[4]) {
    return true;
    // fullHouse hand conditional check, where the last three indexes match and the first two indexes match
  } else if (
    array[0] === array[1] &&
    array[2] === array[3] &&
    array[2] === array[4]
  ) {
    return true;
  } else {
    return false;
  }
};

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// I would like to take all of the credit for this, but I would not have been able to do it without Tricia's help!! THANK YOU SO MUCH
