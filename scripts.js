// Obtain HTML Objects
let encryptButton = document.querySelector('#encrypt-button');
let decryptButton = document.querySelector('#decrypt-button');
let userInput = document.querySelector('#user-input');
let resultMessage = document.querySelector('#result-message');
let copyButton = document.querySelector('#copy-button');

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
        return true;
    }
    return false;
}
// Asign functions
encryptButton.onclick = () => {
    input = userInput.value;
    if (isValid(input)) {
        encrypt(input)
    }
}