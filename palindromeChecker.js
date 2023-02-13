let enterKey = document.getElementById("insideText");
// function definition
enterKey.addEventListener("keypress", function(event) {
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

    const input = event.target.value;
    const result = palindrome(input);
    const reversed = reverseWord(input);
    const letter = vowelOrConsonantLetters(input);
    console.log(`The word "${input}" is ${result ? "" : "not"} a palindrome its reverse word is ${reversed} and whether it is a vowel ${letter.vowelCount} or consonant ${letter.consonantCount}.`);
})

function reverseWord(str) {
    // declare an empty variable
    let reversedWord = "";
    // loop through in a reverse manner
    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i]
    }
  return reversedWord;  
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

document.querySelector('#textcircleTwo').textContent = `No. of vowels: ${vowelCount}`