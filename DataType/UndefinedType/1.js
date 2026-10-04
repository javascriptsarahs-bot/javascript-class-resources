/*
Undefined Type

The undefined type has only one value:

undefined
*/


// --------------------------------------------------
// 1. Declaring a Variable without a Value
// --------------------------------------------------

/*
When a variable is declared using var without assigning
a value, JavaScript automatically initializes the variable
with undefined.

"Initialize" means giving a variable its first value.
*/


var food;

// Guess the output before running the code in the terminal!

console.log(food);         // ?
console.log(typeof food);  // ?


// --------------------------------------------------
// 2. Why Does JavaScript Use undefined?
// --------------------------------------------------

/*
When a variable is declared, JavaScript prepares
a space in memory for that variable.

Memory:
A place where a program stores data while it is running.

Without initialization, newly prepared memory could contain
an unpredictable value left from previous operations.
This is sometimes called a "garbage value."

JavaScript does not leave a var variable in such
an unknown state.

Instead, the JavaScript engine automatically initializes
the variable with:

undefined


JavaScript Engine:
The program that reads and executes JavaScript code.
*/


var name;

console.log(name); // ?


/*
So conceptually:

var name;

        ↓

JavaScript prepares memory for "name"

        ↓

JavaScript automatically initializes it

        ↓

name = undefined
*/


// --------------------------------------------------
// 3. What Does undefined Tell Us?
// --------------------------------------------------

/*
undefined is normally used by the JavaScript engine.

If we access a declared variable and get undefined,
it can tell us that the variable currently does not
have an assigned value.

For example:
*/


var score;

// Guess the output!

console.log(score); // ?


/*
Later, we can assign a value to the variable.
*/


score = 100;

console.log(score); // ?


// --------------------------------------------------
// 4. Do Not Intentionally Assign undefined
// --------------------------------------------------

/*
undefined is mainly used by JavaScript to indicate
the absence of an assigned value.

Because of this, intentionally assigning undefined
to a variable is generally not recommended.

For example:
*/


var userName = undefined; // NOT RECOMMENDED!!! AGAINST THE CONVENTION! 


/*
This works, but it can be confusing.

If we later see:

userName === undefined

we may wonder:

"Did JavaScript produce undefined because no value
was assigned?"

OR

"Did the programmer intentionally assign undefined?"

Therefore, we normally should not use undefined
to intentionally represent "no value."
*/


// --------------------------------------------------
// 5. Then How Do We Intentionally Say "No Value"?
// --------------------------------------------------

/*
If a programmer intentionally wants to say:

"This variable currently has no value."

we commonly use:

null

null represents the intentional absence of a value.
*/


var selectedStudent = null;

// Guess the output!

console.log(selectedStudent); // ?


/*
Compare:

undefined
→ A value commonly produced by JavaScript when
  a variable does not currently have an assigned value.

null
→ A value intentionally assigned by the programmer
  to represent "no value."
*/


// --------------------------------------------------
// Simple Comparison
// --------------------------------------------------

var food;
var drink = null;

// Guess the output before running the code!

console.log(food);   // ?
console.log(drink);  // ?