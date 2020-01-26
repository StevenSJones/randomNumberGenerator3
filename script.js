const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var minChar = 8;
var maxChar = 128;

// User variables
var numOfChar = 0;
var specChar = false;
var nums = false;
var upperCase = false;
var lowerCase = false;

const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

// constant Array of lowercase chars to be included in password declared globally
const lowerCasedCharacters = [
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
  "w",
  "x",
  "y",
  "z"
];

// constant Array of uppercase chars to be included in password declared globally
const upperCasedCharacters = [
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
  "W",
  "X",
  "Y",
  "Z"
];

var password = "";
// check when user clicks on the generate passord button
document.getElementById("generate").addEventListener("click", function() {
  getUserSettings();
  generatePassword();
  // trim down password to the correct size
  // make password length [numOfChar ]

  // display password on the page
  //console.log(password) to the page;

  //document.getElementById("result").console.log("password")
});

function getUserSettings() {
  numOfChar = document.getElementById("numOfChar").value;
  specChar = document.getElementById("specChar").checked;
  nums = document.getElementById("numbers").checked;
  upperCase = document.getElementById("upperCase").checked;
  lowerCase = document.getElementById("lowerCase").checked;
  password = "";
  return;
}

function generatePassword() {
  if (!specChar && !nums && !upperCase && !lowerCase) {
    alert("You must select at least one character type.");
    return;
  }

  if (numOfChar < minChar || numOfChar > maxChar) {
    alert("Plaese choose a different number of character!");
    return;
  }

  while (password.length < numOfChar) {
    if (specChar && password.length < numOfChar)
      password = password + getRandom(specialCharacters);
    if (nums && password.length < numOfChar)
      password = password + getRandom(numbers);
    if (upperCase && password.length < numOfChar)
      password = password + getRandom(upperCasedCharacters);
    if (lowerCase && password.length < numOfChar)
      password = password + getRandom(lowerCasedCharacters);
  }

  alert(password);
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}