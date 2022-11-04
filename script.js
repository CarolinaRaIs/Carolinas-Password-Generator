// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//   WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

var passwordLengthPrompt = prompt("choose a password of at least 8 characters and no more than 128 characters");



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


 