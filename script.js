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
  // Run the chooseCharacters function and assign a variable
  const characters = chooseCharacters();
  // Check if at least one of the confirms above was chosen. If not, restart
  if (characters === "") {
    window.alert("Please select at least one character type");
    return "Try again";
  }

}

// Create a function where a string of characters is created based on a series of prompts
const chooseCharacters = () => {
  // Declare variables containing potential password characters
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = lowerCase.toUpperCase();
  const numerals = "0123456789";
  const specialChars = "!@#$%^&*?+-=_";
  // Create a function to ask a question, then return it's string of characters if true, return blank if false
  function characterString(question, string) {
    const confirmed = window.confirm(question);
    if (confirmed) {
      return string;
    } else {
      return "";
    }
  }
  // Run the function for each character type
  let lower = characterString("Would you like lower case letters?", lowerCase);
  let upper = characterString("Would you like upper case letters?", upperCase);
  let nums = characterString("Would you like numbers?", numerals);
  let special = characterString("Would you like special characters?", specialChars);
  // Return the combined string of characters
  return lower + upper + nums + special;
}


//  // Ask the user if they want lower case letters
//  const lowerConfirm = window.confirm("Would you like the password to contain lower case letters?");
//  // Ask the user if they want upper case letters
//  const upperConfirm = window.confirm("Would you like the password to contain upper case letters?");
//  // Ask the user if they want numbers
//  const numberConfirm = window.confirm("Would you like the password to contain numbers?");
//  // Ask the user if they want special characters
//  const specialConfirm = window.confirm("Would you like the password to contain special characters?");