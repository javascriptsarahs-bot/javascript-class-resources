/*
Advanced: Tagged Templates

A tagged template allows a function to process
the text and values inside a template literal.

IMPORTANT:

Think of ${ } as a "knife" that cuts the string
into separate pieces.

strings[0], strings[1], strings[2], ...
refer to these STRING PIECES, not individual words.

Example:

`Hello, ${name}. You are ${age} years old.`

${name} and ${age} cut the string into three pieces:

strings[0] → "Hello, "
strings[1] → ". You are "
strings[2] → " years old."

The inserted values are:

values[0] → name
values[1] → age

So, strings[1] does NOT mean the second word.
It means the entire second string piece between
${name} and ${age}.
*/


function checkTemplate(strings, ...values) {

    // Guess the output before running the code!

    console.log(strings);       // ?
    console.log(values);        // ?

    console.log(strings[0]);    // ?
    console.log(strings[1]);    // ?
    console.log(strings[2]);    // ?

    console.log(values[0]);     // ?
    console.log(values[1]);     // ?
}


var name = 'Tom';
var age = 15;

checkTemplate`Hello, ${name}. You are ${age} years old.`;