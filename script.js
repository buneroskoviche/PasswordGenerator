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
    window.alert("Please choose a number between 8 and 128");
    return "Try again";
  }
  // Make fun of the user for a specific number choice
  if (passLength === 69) {
    window.alert("Nice.");
  }
  // Run the chooseCharacters function and assign it's value to a variable
  const characters = chooseCharacters();

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
    const confirmed = window.confirm(`Would you like ${question} in your password?`);
    if (confirmed) {
      return string;
    } else {
      return "";
    }
  }
  // Run the function for each character type
  const lower = characterString("lower case letters", lowerCase);
  const upper = characterString("upper case letters", upperCase);
  const nums = characterString("numbers", numerals);
  const special = characterString("special characters", specialChars);
  // Merge the strings into one
  const merge = lower + upper + nums + special;
  // Check if the string is blank. If so, rerun the function
  if (merge === "") {
    window.alert("Please select at least one character type");
    chooseCharacters();
  }
  // Return the combined string of characters
  return merge;
}
