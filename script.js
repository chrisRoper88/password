//object conatining all letters numbers and characters to create a secure password
const characters = {
    letter: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    symbol: ["!", "\"", "£", "$", "%", "^", "&", "*", "(", ")"]
};

//Varibles to display new password
const display = document.getElementById("display");
const button = document.getElementById("button");

//Empty array for new password
const password = [];


//functions to generate random charcters
function letters() {
    let random = Math.floor(Math.random() * 26);
    let randomLetter = characters.letter[random];
    return randomLetter;
}

function numbers() {
    let random = Math.floor(Math.random() * 10);
    let randomNumber = characters.number[random];
    return randomNumber;
}

function symbols() {
    let random = Math.floor(Math.random() * 10);
    let randomSymbol = characters.symbol[random];
    return randomSymbol;
}

//Loop to generate a password eight characters long
for (i = 0; i < 8; i++) {
    let pickCharacter = Math.floor((Math.random() * 3) + 1 );
   
    if (pickCharacter === 1 ) {
        upperOrLower = Math.floor((Math.random() * 2) + 1 );
        if (upperOrLower === 1) {
            password.push(letters());
        } else {
            password.push((letters()).toUpperCase());
        }
       
    } else if (pickCharacter === 2 ) {
        password.push(numbers());

    } else {
        password.push(symbols());
    }
}

//Event handler to display password when button is clicked
button.addEventListener("click", () => {
    h3 = document.createElement("h3");
    h3.innerHTML = password.join("");
    display.appendChild(h3);
});

//Things to improve make sure password contains at least one of each charcter, reset and display new password each time button is clicked 

