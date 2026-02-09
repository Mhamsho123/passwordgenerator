const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

passOne = document.getElementById("password-one");
passTwo = document.getElementById("password-two");
lengthInput = document.getElementById("password-length");

let passwordOne = "";
let passwordTwo = "";



function passwordGenerator(){
    generationOne()
    generationTwo()
}

function generationOne(){
    passwordOne = ""; 
    let length = parseInt(lengthInput.value) || 15;
    if (length < 8) length = 8;
    if (length > 32) length = 32;
    for(let i=0; i<length; ++i){
        let randomizeVar = Math.floor(Math.random()* characters.length)
        let password = characters[randomizeVar]
        passwordOne += password
    }
    passOne.textContent = passwordOne;

}

function generationTwo(){
    passwordTwo = "";
    let length = parseInt(lengthInput.value) || 15;
    if (length < 8) length = 8;
    if (length > 32) length = 32;
    for(let i=0; i<length; ++i){
        let randomizeVar = Math.floor(Math.random()* characters.length)
        let password = characters[randomizeVar]
        passwordTwo += password
    }
    passTwo.textContent = passwordTwo;
}
