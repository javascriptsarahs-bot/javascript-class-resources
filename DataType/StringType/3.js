/*
Why do Strings need quotes?

Unlike some other values, text must be wrapped in quotes.

Quotes tell the JavaScript engine:
"This is text (a string)."

Without quotes, JavaScript may try to read the word
as another part of the code, such as a keyword or an identifier.

Token:
A small unit of code that JavaScript recognizes.
Examples include keywords, identifiers, values, and operators.

Identifier:
A name used to identify something in code, such as a variable name.
*/

var string = 'hello';  // 'hello' is a string
var string = hello;    // JavaScript thinks hello is an identifier 

//ReferenceError: JavaScript tries to use a name (tries to find an identifier or etc.), 
// but it cannot find what that name refers to.