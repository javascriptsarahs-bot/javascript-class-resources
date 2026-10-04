/*
JavaScript is case-sensitive.

NaN must be written exactly as:
NaN

Writing NAN, Nan, or nan will cause an error.

The JavaScript engine
( = the program that reads and runs JavaScript code)
does not recognize NAN, Nan, or nan as the special value NaN.

Instead, it treats them as identifiers
(identifiers = names used for things such as variables).
*/

// Guess what happens before running the code!

console.log(NaN);  // ?
console.log(NAN);  // ?
console.log(Nan);  // ?
console.log(nan);  // ? 