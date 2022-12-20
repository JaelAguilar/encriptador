// Obtain HTML Objects
let encryptButton = document.querySelector('#encrypt-button');
let decryptButton = document.querySelector('#decrypt-button');
let userInput = document.querySelector('#user-input');
let resultMessage = document.querySelector('#result-message');
let copyButton = document.querySelector('#copy-button');
let warningMessage = document.querySelectorAll('.warning');

//Variable declaration
let input;
const keys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

// Functions
function encrypt(input) {
    let length = input.length;
    let result=''
    for (i = 0; i < length; i++){
        result += Object.keys(keys).includes(input[i]) ? keys[input[i]] : input[i];
    }
    resultMessage.innerText = result;
}

function isValid(input) {
    if (input.toLowerCase() === input &&
        input != '' &&
        /[a-z .,:]+/.test(input)) {
        changeWarning(true)
        return true;
    }
    changeWarning(false)
    return false;
}

function changeWarning(test) {
    if (test) {
        for (const el of warningMessage) {
            el.classList.remove('wrong');
        }
    }
    else {
        for (const el of warningMessage) {
            el.classList.add('wrong');
        }
    }
}

// Asign functions
encryptButton.onclick = () => {
    input = userInput.value;
    if (isValid(input)) {
        encrypt(input)
    }
}