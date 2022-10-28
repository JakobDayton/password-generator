
//make character arrays

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*?+-=_";
var numbers = "1234567890";



//prompt user to pick what types of characters they want. 

var generatePassword = function () {
    var daPassword = "";
    var daPasswordArray = "";
    var numOfChars = window.prompt("How many characters u want? (between 8 and 128)");
    if (numOfChars < 8 || numOfChars > 128) {
        window.alert("Bruh. It has to be between 8 and 128 characters")
        writePassword();
    }

    var addLowerCase = window.confirm("Wanna add lower case letters?");
    var addUpperCase = window.confirm("Wanna add upper case letters?");
    var addSpecialChars = window.confirm("How bout some special characters, my guy?");
    var addNumbers = window.confirm("What about numbers?");
    //combine arrays. 
   

    if (addLowerCase){
        daPasswordArray = daPasswordArray.concat(lowerCase);
    }

    if (addUpperCase){
        daPasswordArray = daPasswordArray.concat(upperCase)
    }
   
    if (addSpecialChars){
        daPasswordArray = daPasswordArray.concat(specialChars);
    }

    if (addNumbers){
        daPasswordArray = daPasswordArray.concat(numbers);
    }

    //randomize that shit. 
    for (var i = 0; i < numOfChars; i++) {
        var index = Math.floor(Math.random() * daPasswordArray.length); 
        daPassword += daPasswordArray.substring(index, index + 1)
    }
    return daPassword;

}

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

