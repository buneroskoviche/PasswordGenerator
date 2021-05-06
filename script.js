// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create the generatePassword command
const generatePassword = () => {
  // Prompt the user to choose a number between 8 and 128
  const lengthPrompt = window.prompt("How long would you like the password? 8-128 characters. Please use numerical characters only in your response.");
  // Convert the user response into a number
  const passLength = Number(lengthPrompt);
  // Check if the response is a number between 8 and 128. If not, restart
  if (passLength < 8 || passLength > 128 || isNaN(passLength) || passLength === null) {
    window.alert("Invalid");
    return "Try again";
  }
  // Make fun of the user for a specific number choice
  if (passLength === 69) {
    window.alert("Nice.");
  }

  // Ask the user if they want lower case letters
  const lowerConfirm = window.confirm("Would you like the password to contain lower case letters?");
  // Ask the user if they want upper case letters
  const upperConfirm = window.confirm("Would you like the password to contain upper case letters?");
  // Ask the user if they want numbers
  const numberConfirm = window.confirm("Would you like the password to contain numbers?");
  // Ask the user if they want special characters
  const specialConfirm = window.confirm("Would you like the password to contain special characters?");
  // Check if at least one of the confirms above was chosen. If not, restart
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    window.alert("Please select at least one character type");
    return "Try again";
  }

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = upperCase.toLowerCase();
  console.log(lowerCase);
  var numerals = "123456789"
  var specialChars = "!@#$%^&*?+-=_"

}