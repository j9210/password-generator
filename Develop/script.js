// start generatePassword function
var generatePassword = function () {

  var length = prompt("How long do you want your password? Choose between 8 and 128 characters.");

  if (length < 8 || length > 128 || length === null || isNaN(length)) {
    length = prompt("Your password must be between 8 and 128 characters. Please try again.");
    return generatePassword();
  }

  // confirm character types 
  var lowerCase = confirm("Would you like lower case letters in your password?");
  var upperCase = confirm("Would you like upper case letters in your password?")
  var numChar = confirm("Would you like numbers in your password?");
  var specialChar = confirm("Would you like special characters in your password?");

  // define character types through empty charset string
  var charset = "";

  if (lowerCase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (upperCase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numChar) {
    charset += "123456789";
  }

  if (specialChar) {
    charset += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    charset += '"';
  }

  if (charset === "") {
    window.alert("Sorry, you need more character types in your password.");
    generatePassword();
  }

  var randomPassword = "";

  // for loop that will generate random password
  for (var i = 0; i < length; i++) {
    randomPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return randomPassword;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
