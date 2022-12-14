// Assignment Code
const generateBtn = document.querySelector("#generate");
//this is the function that will run once the event is triggered
function generatePassword() {


// ask how many caracters the password should be
//convert into a number instead of string 
const length = Number(prompt("how many Characters?"));

//if user types in random rubish, handle it
if(isNaN(length)){
  alert("Please enter number of desired Characters")
  return;
}

//if left blank, handle it



//if length is less than 8, handle it
//check for minimum lenth of 8 and max of 128
if(length < 8 || length> 128){
  alert("Please enter a length between 8-128");
  return;
}





//inclue the following parameteres;
//uppercase
const includeUppercase = confirm("do You want uppercase?");
//lowercase
const includeLowercase = confirm("do You want lowercase?");
//numbers
const includeNumbers = confirm("do You want numbers?");
//special symbols
const includeSymbols = confirm("do You want symbols?");

//make sure at least 1 criteria is selected
//detect if all are false
if(!includeNumbers && !includeLowercase && !includeUppercase && !includeSymbols){
  alert("please include atleast one criteria");
  return;
}





//generate password based on criterias selected and length
let charset = "";
//1. create the character set based on criterias
if(includeLowercase){
  charset = charset + "abcdefghijklmnopqrstuvwxyz"
}
if(includeUppercase){
  charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if(includeNumbers){
  charset = charset + "1234567890"
}
if(includeSymbols){
  charset = charset + "!@#$%^&*()_+=-][\|}{';:/?.>,<`~"
}

let password = "";
//2. loop for 'length' times, each iteration grab a random char and append to an accumulator
for (let ii = 0; ii < length; ii++){
  const randomChar = charset[ Math.floor( Math.random() * charset.length ) ]
  password = password + randomChar;
}


//password is a set off random characters



// return the password
return password;
}

// Write password to the #password input
function writePassword(event) {
  const password = generatePassword();

  if(password === undefined){
    return;
  }
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// when we click on generateBtn, then we will execute writePassword
generateBtn.addEventListener("click", writePassword);
