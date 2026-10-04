/*
Escape Sequences in Regular Strings

In a regular string written with single quotes (' ')
or double quotes (" "), an actual line break is not allowed.

For example, we cannot write:
*/


/*
var str = 'Hello
world.';
*/

//  This causes a SyntaxError.


/*
SyntaxError

A SyntaxError occurs when JavaScript cannot understand
the structure or grammar of the code.

"Syntax" means the rules for writing code.

In the example above, JavaScript expects the string
to end before moving to the next line.

However, the line changes before the closing quote appears,
so JavaScript considers the code invalid.
*/


/*
Therefore, if we want to represent special characters
such as a new line, tab, or quotation mark inside
a regular string, we use an ESCAPE SEQUENCE.

An escape sequence is a special combination of characters
that starts with a backslash (\).

The backslash tells JavaScript:

"The character after me has a special meaning."

For example:

\n

does not mean the letter "n".

It means:

"Start a new line."
*/


// --------------------------------------------------
// 1. \n → New Line
// --------------------------------------------------

/*
\n creates a new line inside a string.
*/

// Guess the output before running the code!

var str1 = 'Hello\nWorld';

console.log(str1);

/*
Guess:

?
?
*/


// --------------------------------------------------
// 2. \t → Tab
// --------------------------------------------------

/*
\t inserts a tab space.

It is useful when we want to create
a larger space between pieces of text.
*/

// Guess the output!

var str2 = 'Name\tAge';

console.log(str2); // ?


// Try another one.

var str3 = 'Tom\t15';

console.log(str3); // ?


// --------------------------------------------------
// 3. \' → Single Quote
// --------------------------------------------------

/*
\' allows us to include a single quote (')
inside a string that is also surrounded
by single quotes.

Without the backslash, JavaScript may think
the single quote ends the string.
*/



/*
var message = 'I'm a student.';
*/

//SyntaxError! 


/*
JavaScript may think:

'I'

is the string, because the ' in I'm
looks like the end of the string.

We can escape the single quote using \'
*/


var message = 'I\'m a student.';

// Guess the output!

console.log(message); // ?


// --------------------------------------------------
// 4. \" → Double Quote
// --------------------------------------------------

/*
\" allows us to include a double quote (")
inside a string surrounded by double quotes.

Without the backslash, JavaScript may think
the double quote ends the string.
*/


var quote = "He said, \"Hello!\"";

// Guess the output!

console.log(quote); // ?


// --------------------------------------------------
// 5. \\ → Backslash
// --------------------------------------------------

/*
The backslash (\) already has a special meaning
in JavaScript strings.

It is used to start an escape sequence.

Therefore, if we want an actual backslash
to appear in the string, we write two backslashes:

\\
*/


var path = 'C:\\Users\\Tom';

// Guess the output!

console.log(path); // ?


/*
--------------------------------------------------

Summary

Escape sequences start with a backslash (\).

Common escape sequences:

\n   → New line
\t   → Tab
\'   → Single quote
\"   → Double quote
\\   → Backslash

--------------------------------------------------

Less Common Escape Sequences

JavaScript also has some other escape sequences:

\0   → Null character
\f   → Form feed
\v   → Vertical tab

These are less commonly used in basic JavaScript,
so for now, focus on:

\n
\ts
\'
\"
\\
*/