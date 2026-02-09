const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

passOne = document.getElementById("password-one");
passTwo = document.getElementById("password-two")

let passwordOne = "";
let passwordTwo = "";



function passwordGenerator(){
    generationOne()
    generationTwo()
}

function generationOne(){
    passwordOne = ""; 
    let randomNum = Math.floor(Math.random() * (50 - 15 + 1)) + 15;
    for(let i=0; i<randomNum; ++i){
        let randomizeVar = Math.floor(Math.random()* characters.length)
        let password = characters[randomizeVar]
        passwordOne += password
    }
    passOne.textContent = passwordOne;

}

function generationTwo(){
    passwordTwo = "";
    let randomNum = Math.floor(Math.random() * (50 - 15 + 1)) + 15;
    for(let i=0; i<randomNum; ++i){
        let randomizeVar = Math.floor(Math.random()* characters.length)
        let password = characters[randomizeVar]
        passwordTwo += password
    }
    passTwo.textContent = passwordTwo;

}