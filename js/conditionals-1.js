console.log('conected...');

/*
1.Generate Number
2. prompt user to type Number
3. compare results (if/else) */

const generatedNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = prompt("Guess what number I'm thinking of from 1 to 10!")

userGuess = parseInt(userGuess)

console.log(generatedNumber)

if (userGuess === generatedNumber) {
    document.querySelector('h1').innerHTML = 'You guessed right, great job!'
} else {
    document.querySelector('h1').innerHTML = 'You guessed wrong, refresh to try again.'
}