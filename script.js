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
  // Create an empty array to put characters into
  let passArray = [];
  // Run a 'for' loop based on the length chosen, to put a random digit from the characters string into the array
  for (var i = 0; i < passLength; i++) {
    passArray.push(characters[Math.floor(Math.random() * characters.length)])
  }
  // Convert the array of characters into a string and return it
  return passArray.join("");
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
  // Run the function for each character type and merge them into one string
  let merge = characterString("lower case letters", lowerCase)
   + characterString("upper case letters", upperCase)
   + characterString("numbers", numerals)
   + characterString("special characters", specialChars);
  // Check if the merged string is blank. If so, rerun the function for a new string and return it instead
  if (merge === "") {
    window.alert("Please select at least one character type");
    validatedMerge = chooseCharacters();
    return validatedMerge;
  } else {
    return merge;
  }
}
