/*
JavaScript does not have a separate number type just for integers.
All regular numbers are handled using the Number type.

This means that even if a number looks like an integer,
it is still represented using the same Number type.

Therefore, dividing two numbers that look like integers
can still produce a decimal result.
*/

// Guess the output before running this code in the terminal!

/*
==  : Equality operator
=== : Strict equality operator (type has to be matched as well)
*/
console.log(1 === 1.0); // ?

console.log(4 / 2); // ?
console.log(typeof (4 / 2)); // ?

console.log(3 / 2); // ?
console.log(typeof (3 / 2)); // ?
