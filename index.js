const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperLetters = letters.map( item =>  item.toUpperCase())
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specials  = ["-", "_", ".", "%", "$"]



function displayLength(){
    let range = document.getElementById("password-length").value
    document.getElementById("password-length-result").innerHTML = range
}

function toClipboard(){
    let copiedText = document.getElementById("password")
    copiedText.select()
    copiedText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    alert("Your password is copied to clipboard!")
}

function generatePassword(){
    let range = document.getElementById("password-length").value
    let charsUsed = letters
    let password = ""
    let upperCheck = document.getElementById("check-uppercase")
    let numberCheck = document.getElementById("check-number")
    let specialCheck = document.getElementById("check-special")

    
    if(upperCheck.checked && numberCheck.checked && specialCheck.checked){
        charsUsed = charsUsed.concat(upperLetters).concat(numbers).concat(specials)

        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else if(upperCheck.checked && numberCheck.checked ){
        charsUsed = charsUsed.concat(upperLetters).concat(numbers)
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else if(specialCheck.checked && numberCheck.checked ){
        charsUsed = charsUsed.concat(specials).concat(numbers)
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else if(specialCheck.checked && upperCheck.checked ){
        charsUsed = charsUsed.concat(specials).concat(upperLetters)
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else if(upperCheck.checked){
        charsUsed = charsUsed.concat(upperLetters)
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else if(numberCheck.checked){
        charsUsed = charsUsed.concat(numbers)
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else if(specialCheck.checked){
        charsUsed = charsUsed.concat(specials)
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    else{
        while(password.length < range){
            let i = Math.floor((Math.random() * charsUsed.length))
            password += charsUsed[i]
        }
    }
    document.getElementById("password").value = password
}


function changeColor(){
    let input = document.getElementById("password")
    input.style.backgroundColor = "whitesmoke"
}
function reverseColor(){
    let input = document.getElementById("password")
    input.style.backgroundColor = "rgb(207, 204, 204)"
}