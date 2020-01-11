// Array of special chars to be included in password
var specialCharacters = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", 
  "?", ":", ",", ")", "(", "}", "{", "]", "[", "~",
  "-", "_", "."
];

// Array of nums to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase chars to be included in password
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m" , "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

// Array of uppercase chars to be included in password
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function blinkfunc {
var result = str.blink();
  document.getElementById("demo").innerHTML = result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
