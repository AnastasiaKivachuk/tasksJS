//-------------------test 1
// Apply CSS styles (red color and black background) to the third paragraph of the following HTML
// template:
// {
// <div class=”container”>
// <p>First</p>
// <p>Second</p>
// <p>Third</p>
// </div> 
// }

const items = document.querySelectorAll('p');
const countItems = items.length;
items[countItems - 1].style.background = 'black';
items[countItems - 1].style.color = 'red';


//-------------------test 2
// Write a program that outputs sequentially the integers from 1 to 99 but on some conditions
// prints a string instead:
// ● when the integer is a multiple of 3 print “Open” instead of the number,
// ● when it is a multiple of 7 print “Source” instead of the number,
// ● when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 7 != 0) {
        console.log('Open');
    } else if (i % 3 != 0 && i % 7 == 0) {
        console.log('Source');
    } else if (i % 3 == 0 && i % 7 == 0) {
        console.log('OpenSource');
    } else {
        console.log(i);
    }
}


//-------------------test 3
// Find all children of the container HTML element in the following template using native
// JavaScript functionality.
// <div class=”container”>
// <div>A</div>
// <div>B</div>
// <div>C</div>
// </div>
let divContainer = document.querySelector('.container');
console.log(`Count of all children of the container: ${divContainer.children.length}`);
for (var i = 0; i < divContainer.children.length; i++) {
    console.log(divContainer.children[i]);
}


//-------------------test 4
// Write a function that takes a list of strings and returns the sum of the list items that represents
// an integer (skipping the other items).
// Example:
// Input: [‘1’, ‘a’, ‘25’, ‘13.1’].
// Output: 26.
let newArr = [];
let arr = ['1', 'a', '25', '13.1'];
arr.forEach(items => {
    items = +items;
    if (Number.isInteger(items)) {
        return newArr.push(items);
    }
});
const result = newArr.reduce(function (sum, current) {
    return sum + current;
})
console.log(result);

//-------------------test 5
// Write a function that gets JSON from the following link
// ( https://jsonplaceholder.typicode.com/posts ) and returns an object with id = 5.


let request = new XMLHttpRequest();
request.onload = requestData;
request.onerror = reqError;
request.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
request.send();

function requestData() {
    var data = JSON.parse(this.response);
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == 5) {
            console.log(data[i]);
        }

    }
}

function reqError(err) {
    console.log('Fetch Error :-S', err);
}



//-------------------test 6
// Write a regular expression to match strings containing both "Softeq" and "#rules" in any order.
let regExpr=/Softeq|#rules/g;


//-------------------test 7
// Write a function that, when called, returns an array for which each element is a letter of the
// alphabet, from "A" to "Z" (exactly once, in order and upper case). Your code cannot contain the
// character ' (quote), " (double quote) or ` (backquote).
function alphabetFun() {
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

console.log(alphabetFun());

//-------------------test 8
// Solve the game "Guess a number", find a secret integer between 1 and 1000000 in less than 50
// guesses. Write a function that solves the game and returns the solution by using the function
// verify() which is defined with the following specification:
// function verify(guess: integer) -> integer
// Returns:
// ● 0 if the guess is the solution, your program won,
// ● -1 if the solution is smaller than the guessing parameter,
// ● 1 if the solution is bigger than the guessing parameter.
// Warning: You are not allowed to call verify() more than 50 times or you lose.

let secretNumber = Math.floor(Math.random() * (1000000)) + 1;
//console.log(`secretNumber ${secretNumber}`);
let count=0;
function verify(guessNumber) {
count++;
//console.log(`count ${count}`);
    if (count<=50){
    console.log(`Guess: ${guessNumber}`);
    if (secretNumber > guessNumber) {
        console.log(1);
        console.log('the solution is bigger than the guessing parameter. Try again');
    } else if (secretNumber < guessNumber) {
        console.log(-1);
        console.log('the solution is smaller than the guessing parameter. Try again');
    } else if(secretNumber == guessNumber) {
        console.log(0);
        console.log('You won!!!!');}
    }
    else{console.log('You lose...');} 
}
verify(567842);
verify(5);
verify(648);
verify(567842);
verify(1000000);
verify(648);
verify(567842);
verify(secretNumber);