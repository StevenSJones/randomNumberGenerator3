// constant Array of special chars to be included in password declared globally
const specialCharacters = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", 
  "?", ":", ",", ")", "(", "}", "{", "]", "[", "~",
  "-", "_", "."
];

// constant Array of nums to be included in password declared globally
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// constant Array of lowercase chars to be included in password declared globally
const lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

// constant Array of uppercase chars to be included in password declared globally
const upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];

var passwordArea = document.querySelector('#password');
var noRepeatBox = document.querySelector("#norepeat").checked;
var specialCharactersBox = document.querySelector("#specialCharacters").checked;
var numericCharactersBox = document.querySelector("#numericCharacters").checked;
var sortBox = document.querySelector("#sort").value;
var noRepeatLabel = document.querySelector("label[for=norepeat]").value;
var sortLabel = document.querySelector("label[for=sort]").value;

  // use querySelector to grab my button BY the generate id
  var generateBtn = document.querySelector("#generate");
  /*use an event listener to write perform all the functions inside
  the writePassword() on a click*/
  generateBtn.addEventListener("click", writePassword());{
  /*prevent the default event REFRESH when the click happens place it fist in the function so that it is called first
   although the documentation that I found stated that only in a form in HTML would preventDefault NEED to ne used.
   Placed inside the click funtion because that is when it would need to be in place*/
   event.preventDefault(); 
}


  //event listener for user input(click) on whether the user wants "no repeat"
  noRepeatBox.addEventListener('click', function(event){
   /*prevent the default event REFRESH when the click happens place it fist in the function so that it is called first
   although the documentation that I found stated that only in a form in HTML would preventDefault NEED to ne used.
   Placed inside the click funtion because that is when it would need to be in place*/
  event.preventDefault();
  noRepeatLabel.classList.toggle('checked');
  });

  //event listener for user input(click) on whether the user wants ""
  sortBox.addEventListener('click', function(){
   /*prevent the default event REFRESH when the click happens place it fist in the function so that it is called first
   although the documentation that I found stated that only in a form in HTML would preventDefault NEED to ne used.
   Placed inside the click funtion because that is when it would need to be in place*/
  event.preventDefault();
  sortLabel.classList.toggle('checked');
});

 


//the writePassword function is where the work is done. pass in the event
function writePassword() {
  //only run these functions inside of the writePassword function . SCOPE (thanks Nick!)
  var noRepeat = document.querySelector('#norepeat').checked;
  var sort = document.querySelector("#sort").checked;
  var min = Number(document.querySelector('#minimum').value);
  //console.log(min);
  var max = Number(document.querySelector('#maximum').value);
  //console.log(max);
  var passwordCount = Number(document.querySelector('#passwordcount').value);
  
  var specialCharacters = document.querySelector('#password').text;//?
  var numericalCharacters = document.querySelector('#password').value;
  var lowerCasedCharacters = document.querySelector('#password').text;
  var upperCasedCharacters = document.querySelector('#password').text;
  var passwordArray = [ ];

  passwordText.value = password;
  passwordArea.innerHTML = "";
};
//var max = Number(document.querySelector('#maximum').value);
  //write password input to var password

/*conditional logic that checks if the user selected a number that wasnt 0 or negative
and if it is returns an error*/
  if((max - min) == 0 || (max - min) <= 0) {
    passwordArea.innerHTML = '<span class="error">Please choose a valid range.</span>'
    return;
    /*conditional logic that checks if the max input is less than the min and if it is 
    returns an error*/
} else if (max < min) {
    passwordArea.innerHTML = '<span class="error">Invalid number range</span>'
    return;
    /*coditional logic that  checks if the user selected no repeat and the passwordCount is
    greater than the max - min range + 1 */
} else if (noRepeat && passwordCount > ((max - min) + 1)) {
    passwordArea.innerHTML = '<span class="error">Range is too small to generate only unique numbers</span>'
    return;
} 
    if(!passwordCount) {
    passwordCount = 1;
    }
//Below, the generatePassword function is defined
        function newNumber() {
        if (min == 0) {
        var password = Math.floor(Math.random() * (max + 1));
        } else if (min < 0 && max >= 0) {
        var password = Math.ceil(Math.random() * (min - 1)) + Math.floor(Math.random() * (max + 1));
        } else if (min < 0 && max < 0) {
        var password = (Math.ceil(Math.random() * (min - 1))) + max;
        } else {
        var password = Math.floor(Math.random() * max + 1);
        }
  //if  the password is smaller than min or it doesnt repeat and password array includes password, return a new number
            if(password < min || noRepeat && passwordArray.includes(password)) {
            return newNumber();
            }
  //console.log(password) to the page;
            password.push(password);
}

for(i = 1; i<=passwordCount; i++){
  newNumber();
}
console.log(passwordArray);
if(sort){
  /*sort is used to determine the order of the elements.When not used the elements
  are sorted in ascending.*/
  passwordArray == passwordArray.sort((a, b) => a - b);
}
passwordArea.innerHTML += passwordArray.join(', ');


  
    /*// BONUS 
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// BONUS EVENT LISTENER
function copyToClipboard() {}*/ 