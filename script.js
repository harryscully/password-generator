const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.querySelector('#password-1')
let password2El = document.querySelector('#password-2')


// create a function to generate a string of 15 random characters

function createPassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

// create a function to set the password fields to generated password

function showPasswords() {
    password1El.textContent = createPassword()
    password2El.textContent = createPassword()
}