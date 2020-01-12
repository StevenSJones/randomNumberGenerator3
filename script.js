// constant Array of special chars to be included in password
const specialCharacters = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", 
  "?", ":", ",", ")", "(", "}", "{", "]", "[", "~",
  "-", "_", "."
];

// constant Array of nums to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// constant Array of lowercase chars to be included in password
const lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

// constant Array of uppercase chars to be included in password
const upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];

// use querySelector to grab my button BY the generate id
var generateBtn = document.querySelector("#generate");
/*use an event listener to write perform all the functions inside
 the writePassword() on a click*/
generateBtn.addEventListener("click", writePassword);
//prevent the default event REFRESH when the click happens
event.preventDefault()
 //create a variable and set it eqaul to an open array
 var password = [" "];


// Write password to the #password input
function writePassword() {
  //only run these functions inside of the writePassword function . SCOPE (thanks Nick!)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var resultText = document.querySelector('#result');
  var noRepeatBox = document.querySelector('#norepeat');
  var sortBox = document.querySelector('#sort');

  var noRepeatLabel = document.querySelector('label[for=norepeat]')
  var sortLabel = document.querySelector('label[for=sort]')
//event listener for user input on whether the user wants "no repeat"
  noRepeatBox.addEventListener('click', function(){
    noRepeatLabel.classList.toggle('checked');
});
//event listener for user input on whether the user wants ""
sortBox.addEventListener('click', function(){
    sortLabel.classList.toggle('checked');
  //write password input to var password
  passwordText.value = password;

});

/*conditional logic that checks if the user selected a number that wasnt 0 or negative
and if it is returns an error*/
  if((max - min) == 0 || (max - min) <= 0) {
    resultArea.innerHTML = '<span class="error">Please choose a valid range.</span>'
    return;
    /*conditional logic that checks if the max input is less than the min and if it is 
    returns an error*/
} else if (max < min) {
    resultArea.innerHTML = '<span class="error">Invalid number range</span>'
    return;
    /*coditional logic that  checks if the user selected no repeat and the resultCount is
    greater than the max - min range + 1 */
} else if (noRepeat && resultCount > ((max - min) + 1)) {
    resultArea.innerHTML = '<span class="error">Range is too small to generate only unique numbers</span>'
    return;
} 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // BONUS 
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// BONUS EVENT LISTENER
function copyToClipboard() {}
