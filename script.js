// Assignment code here
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', '"', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//   WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLengthPrompt = prompt("choose a password of at least 8 characters and no more than 128 characters");

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each confirm
var passwordLengthPrompt = parseInt(prompt("Choose a password of at least 8 characters and no more than 128 characters"));
var hasSpecialCharacters = confirm("Would you like to include special characters in your password?");
var hasLowerCase = confirm("Would you like to include lower case characters in your password?");
var hasUpperCase = confirm("Would you like to include upper case characters in your password?");
var hasNumbers = confirm("Would you like to include numbers in your password?");
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


  return 'hello Carolina'
}

// Write password to the #password input
// Function creates a new password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

//*Add event listener to generate button* Provided 
generateBtn.addEventListener("click", writePassword);


