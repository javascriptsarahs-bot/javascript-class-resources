/*
Expression Interpolation

Template literals allow us to insert a value
directly inside a string using ${ }.

Interpolation means inserting a value into a string.
*/

var name = 'Tom';

// Guess the output before running this code in the terminal!

console.log(`Hello, ${name}!`);  // ?
console.log("=======================")

/*
There are different ways to combine strings and values.

We can use the + operator:

'Hello, ' + name + '!'

With a template literal, we can use ${ }:

`Hello, ${name}!`
*/

var name = 'Tom';

// Guess the output before running this code in the terminal!
// Would they give the same result? Guess bofore you run the code! 
console.log('Hello, ' + name + '!');  // ?
console.log(`Hello, ${name}!`);       // ?
