// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var password = pickedChar;
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;
}

  function generatePassword(){
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase =lowerCase.toUpperCase();
  let specialChar = '" !"#$%&()*+,-./:;<=>?@[\]^_`{|}~"';
  let num='0123456789';
  
  let userChar='';
  

   
    let varUpper= confirm ("click Ok or press enter,if you wish to include Upper Case letters, if not then click cancel")
      if (varUpper) {
      userChar= userChar.concat(upperCase)
      };
  
    let varlower=confirm ("click Ok or press enter,if you wish to include lower Case letter, if not then click cancel");
    if (varlower) {
      userChar= userChar.concat(lowerCase)
      };
    
    let varSpecial=confirm ("click Ok or press enter,if you wish to include cpecial character , if not then click cancel");
    if (varSpecial) {
      userChar=userChar.concat(specialChar)
    };
    
    let varNumber=confirm ("click Ok or press enter,if you wish to include numbers , if not then click cancel");
    if (varNumber) {
      userChar=userChar.concat(num)
    };
    console.log(userChar)
 
    let shuffledUserChar = userChar.split('').sort(function(){return 0.5-Math.random()}).join('');
    userChar=shuffledUserChar

    console.log(userChar) 
    let passSize=prompt ("Enter your password lenght.It MUST be more than 8 or less than 50 characters ");
    
    while (passSize<9 || passSize>50) {
    passSize=prompt ("Enter your password lenght.It MUST be more than 8 or less than 50 characters ");
    }
 


let pickedChar='';
for (i=0; i<= passSize; i++) {
  let random =userChar[Math.floor(Math.random () * userChar.length)];
  pickedChar=pickedChar.concat(random);
}
console.log(pickedChar);
return pickedChar;
}





// ..............................................................................
// let passSize;
// do {
//   passSize = prompt ("Type the lenght of your password. It must me more than 8 characters")

//   const isInvalid = passSize < 8 || passSize> 128;
//   if( isInvalid )
//     alert ("password must be greater or equal than 8 units")

// } while( isInvalid );

// / ..............................................................................


