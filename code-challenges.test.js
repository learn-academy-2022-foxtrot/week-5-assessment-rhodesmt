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

const enigma = (string) => {
  let enigmaArr = string.split("");
  enigmaArr.map((value) => {
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
  return enigmaArr.join("");
};
// I'm getting an error and I'm not sure why. I know it's syntaxical, but for some reason the else if statements past line 45 aren't being accessed.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// describe("letterFinder", () => {
//   it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

//     const letterA = "a"
//     // Expected output: ["Mango", "Apricot", "Peach"]
//     expect(letterFinder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);

//     const letterE = "e"
//     // Expected output: ["Cherry", "Blueberry", "Peach"]
//     expect(letterFinder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
//   });
// });

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
