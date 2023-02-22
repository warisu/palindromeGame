const revKey = document.querySelector('#revSpan');
const palKey = document.querySelector('#palSpan');
const conKey = document.querySelector('#conSpan');
const vowKey = document.querySelector('#vowSpan');
const oriKey = document.querySelector('#oriSpan');

const updateTxt = () => {
    const inputText = document.getElementById('inputTxt').value;
    const reversedWord = reverseWord(inputText);
    const palindromeChecker = palindrome(inputText);
    const letters = vowelOrConsonantLetters(inputText);
    revKey.textContent = reversedWord;
    palKey.textContent = palindromeChecker;
    vowKey.textContent = letters.vowelCount;
    conKey.textContent = letters.consonantCount;
    const spanKeys = document.querySelectorAll('tspan');
    for (let i = 0; i < spanKeys.length; i++) {
        spanKeys[i].classList.add('gameColor')
    }
}

document.getElementById('inputTxt').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
        updateTxt();
    }
});

// target the button element
document.querySelector('.btn').addEventListener('click', function(event) {
    updateTxt()
})


function palindrome(str, firstRun = true) {
    // check if str is a string
    //     if (typeof str !== 'string') 
    //    return false;
        // remove all alphanumeric characters and replace with ""
    const testStr = firstRun ? str.toLowerCase().replace(/[^0-9a-z]/g, "") : str;
    if (testStr.length === 1) {
        return true
    }
    // check if it is of length 2
    if (testStr.length === 2) {
        return testStr[0] === testStr[1]
    }
    // check if its exceed length of 2
    if (testStr[0] === testStr.slice(-1)) {
        return palindrome(testStr.slice(1, -1), false)
    }
    // if none of the conditions is found, return this
    return false
    }

function reverseWord(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
     return reversed
}


function vowelOrConsonantLetters(str) {
    let vowelCount = 0;
    let consonantCount = 0;
    let smallLetter = str.toLowerCase();
    for (let i of smallLetter) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
             vowelCount += 1
        } else if (i >= 'a' && i <= 'z'){
             consonantCount += 1
        }
    }
     return {vowelCount, consonantCount};
}

