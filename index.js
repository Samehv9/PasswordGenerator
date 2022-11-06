let saveElOne = document.querySelector('.saveone')
let saveElTwo = document.querySelector('.savetwo')
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordLength = 16

function getChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generate() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += getChar()
        passwordTwo += getChar()
    }
    saveElOne.textContent = passwordOne
    saveElTwo.textContent = passwordTwo
}

function saveOne(event) {
    let copyTextOne = document.querySelector(".saveone")
    navigator.clipboard.writeText(copyTextOne.textContent)
}
function saveTwo(event) {
    let copyTextTwo = document.querySelector(".savetwo")
    navigator.clipboard.writeText(copyTextTwo.textContent)
}
