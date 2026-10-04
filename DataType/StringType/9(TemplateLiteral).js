/*
Template Literals and Runtime

Runtime means:

"The time when a program is actually running."

When JavaScript runs a template literal,
it evaluates the expressions inside ${ }
and produces a string.
*/

var name = 'Tom';

var message = `Hello, ${name}!`;

// Guess the output before running this code in the terminal!

console.log(message);         // ?
console.log(typeof message);  // ?