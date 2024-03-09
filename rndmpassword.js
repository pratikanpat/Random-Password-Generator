// access the password 
const passwordbox = document.getElementById("password");
// set the length of the password
const length=12;
// characters to be added in password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "=-+_)(*&^%$#@!`~';:<>,./?</>";
// combination of all the charachter sets
const allChars = upperCase + lowerCase + number + symbols;

// function to create password using above charachter
function createPassword(){
    let password =""

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while( length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = password;
}
// function to copy the created password
function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");

    const popupMessage = document.getElementById("popupMessage");
    popupMessage.style.display = "block";

    // Hide the popup after 2 seconds (adjust the timeout as needed)
    setTimeout(function () {
        popupMessage.style.display = "none";
    }, 2000);
}

// let upperCase = "ABCD";
// let number = "1234";
// function tocreateValue(){
//     let rndmValue="";

//     rndmValue = rndmValue + upperCase[Math.floor(Math.random()*upperCase.length)];
//     rndmValue =   rndmValue + number[Math.floor(Math.random()*number.length)];
//     return rndmValue;
// }
// tocreateValue();

// Example of how to use the returned password
// const generatedPassword = createPassword();
// console.log(generatedPassword);


