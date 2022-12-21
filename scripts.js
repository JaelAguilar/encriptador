// Obtain HTML Objects
let encryptButton = document.querySelector('#encrypt-button');
let decryptButton = document.querySelector('#decrypt-button');
let userInput = document.querySelector('#user-input');
let resultMessage = document.querySelector('#result-message');
let copyButton = document.querySelector('#copy-button');
let warningMessage = document.querySelectorAll('.warning');
let resultBox = document.querySelector('#result');

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

/**
 * Encrypts the input by changing all vowels with the specific key value.
 *
 * @param {String} input
 */
function encrypt(input) {
    let length = input.length;
    let result=''
    for (i = 0; i < length; i++){
        result += Object.keys(keys).includes(input[i]) ? keys[input[i]] : input[i];
    }
    resultMessage.innerText = result;
}

/**
 *Decrypts the input by removing the last elements of the keys, leaving only vowels
 *
 * @param {String} input
 */
function decrypt(input) {
    let length = input.length;
    let result = '';
    for (i = 0; i < length; i++){
        result += input[i];
        if (Object.keys(keys).includes(input[i])) {
            i += keys[input[i]].length - 1;
        }
    } 
    resultMessage.innerText = result;
}

/**
 * Checks if the input is in lowercase, contains only letters or specific symbols and is not empty
 *
 * @param {String} input
 * @return {Bool} True if valid, else False
 */
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

/**
 * Changes the color of the little warning message if Input is not valid
 *
 * @param {String} test
 */
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

/**
 * Shows result the first time the user makes a query
 *
 */
function showResultOnMobile() {
    resultBox.classList.add('visible');
}

// Asign functions
encryptButton.onclick = () => {
    input = userInput.value;
    if (isValid(input)) {
        encrypt(input);
        showResultOnMobile();
    }
}

decryptButton.onclick = () => {
    input = userInput.value;
    if (isValid(input)) {
        decrypt(input);
        showResultOnMobile();
    }
}