/*
String Concatenation

Strings can be joined together using the + operator.

When at least one of the values used with + is a string,
the + operator works as a STRING CONCATENATION operator.

"Concatenation" means joining strings together.

When the values are not strings, + can work as
an addition operator.
*/


// --------------------------------------------------
// 1. String Concatenation with +
// --------------------------------------------------

var first = 'Tom';
var last = 'Smith';

// Guess the output before running the code!

console.log('My name is ' + first + ' ' + last + '.'); // ?


/*
The + operator joins the strings and variables together.

'My name is ' + first + ' ' + last + '.'

Each part is connected to create one string.
*/


// --------------------------------------------------
// 2. Using a Template Literal
// --------------------------------------------------

/*
We can write the same sentence more easily
using a template literal.

Template literals use backticks (` `).
*/

console.log(`My name is ${first} ${last}.`); // ?


// Do these two lines produce the same output?

console.log('My name is ' + first + ' ' + last + '.'); // ?
console.log(`My name is ${first} ${last}.`);            // ?


// --------------------------------------------------
// 3. Expression Interpolation
// --------------------------------------------------

/*
To insert an expression into a template literal,
wrap the expression inside ${ }.

This is called expression interpolation.

An expression is code that produces a value.

For example:

1 + 2

is an expression because it produces a value.
*/


// Guess the output!

console.log(`1 + 2 = ${1 + 2}`); // ?


/*
JavaScript first evaluates the expression:

1 + 2

and then inserts the result into the string.
*/


// --------------------------------------------------
// 4. Values Are Converted to Strings
// --------------------------------------------------

/*
The result of the expression inside ${ }
does not have to be a string.

Even if the result is a number or another type,
JavaScript converts it to a string when inserting
it into the template literal.

For example:

${1 + 2}

First:

1 + 2
   ↓
   3

Then the value 3 is inserted into the string.
*/


var a = 10;
var b = 20;

// Guess the output!

console.log(`The answer is ${a + b}.`); // ?


// --------------------------------------------------
// 5. ${ } Must Be Used Inside a Template Literal
// --------------------------------------------------

/*
Expression interpolation using ${ } works inside
a TEMPLATE LITERAL.

Remember:

Template literal → uses backticks (` `)
*/


console.log(`1 + 2 = ${1 + 2}`); // ?


/*
If we write the same thing inside a regular string
using single quotes (' ') or double quotes (" "),
${ } is NOT evaluated as expression interpolation.

Instead, it is treated as normal text.
*/


// Guess the difference!

console.log(`1 + 2 = ${1 + 2}`); // ?
console.log('1 + 2 = ${1 + 2}'); // ?


// --------------------------------------------------
// PLAY AROUND
// --------------------------------------------------

var x = 5;
var y = 10;

// Guess the output before running the code!

console.log('x + y = ' + x + y);     // ?
console.log('x + y = ' + (x + y));   // ?
console.log(`x + y = ${x + y}`);     // ?