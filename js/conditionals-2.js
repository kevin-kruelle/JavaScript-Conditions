/*
1. Prompt user to enter a number (store in a variable)
2. If the number is divisible by 3, alert 'chimi' if
3. If the number is divisible by 5, alert 'changas' else if
4. If the number is divisible by 3 and 5, alert 'chimichangas!' else if'
*/

let userInput = prompt("Give me a number!");

userInput = parseInt(userInput);

 if ( userInput % 3 === 0 && userInput % 5 === 0) {
    alert('Chimichangas!');
} else if ( userInput % 3 === 0) {
    alert('Chimi');
} else if ( userInput % 5 === 0) {
    alert('Changas');
} else {
    alert('Your number is not divisible by 3 or 5, refresh to try again.')
}