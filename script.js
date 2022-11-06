// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// More references
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '/', '"', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',]
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function passwordLength(){
  var passwordLengthPrompt = prompt("Please type the number of characters you'd like in your password. Your input must be between 8 to 128.");

  if (passwordLengthPrompt < 8) {
    alert("Oops, not enough characters! Type in a whole number between 8 - 128.");
    passwordLength();
  }else if (passwordLengthPrompt > 128) {
    alert("Oops, too many characters! Type in a whole number between 8 - 128.")
    passwordLength();
  }else if (isNaN(passwordLengthPrompt)){
    alert("Oops, the password length must be a whole number between 8-128.")
  }else{
    alert("Let's combine the characters you want in your password.")
  }

 // WHEN asked for character types to include in the password
  // WHEN I answer each confirm
  //var passwordLengthPrompt = parseInt(prompt("Choose a password of at least 8 characters and no more than 128 characters"));
  // whether or not to include and/or special characters:
  var hasSpecialCharacters = confirm("Would you like to include special characters in your password?");
  // THEN I confirm whether or not to include lowercase, 

  var hasLowerCase = confirm("Would you like to include lower case characters in your password?");
  // whether or not to include uppercase: 
  
  var hasUpperCase = confirm("Would you like to include upper case characters in your password?");
  // whether or not to include numeric: 

  var hasNumbers = confirm("Would you like to include numbers in your password?");
}

  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
function generatePassword() {
  passwordLength();
  console.log(passwordLength);
  wantSpecialCharacters
  console.log(specialCharCheck);
  wantLowerCase
  console.log(lowercaseCheck);
  wantUpperCase
  console.log(uppercaseCheck);
  WantNumbers
  console.log(numberCheck);

  var characters = lowercaseCharacters;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCharCheck){
    characters += uppercaseCharacters + numericCharacters + specialCharacters;
  
  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseCharacters + numericCharacters;
  
  }else if (numberCheck && specialCharCheck){
    characters += numericCharacters + specialCharacters;
  
  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;
  
  }else if (uppercaseCheck){
    characters += uppercaseCharacters;
  
  }else if(numberCheck){
    characters += numericCharacters;
  
  }else if (specialCharCheck){
    characters += specialCharacters;
  
  }else{
    characters === lowercaseCharacters;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
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


