/*
Null Type

The null type has only one value:

null

JavaScript is case-sensitive.

Therefore:

null

is NOT the same as:

NULL
Null
nulL
*/


// --------------------------------------------------
// 1. null = Intentional Absence of a Value
// --------------------------------------------------

/*
In JavaScript, null is used when a programmer
intentionally wants to represent:

"There is no value."

This is sometimes called:

"intentional absence of a value"

Unlike undefined, which is commonly produced by JavaScript,
null is usually assigned intentionally by the programmer.
*/


var selectedStudent = null;

// Guess the output before running the code!

console.log(selectedStudent); // ?


// --------------------------------------------------
// 2. Removing a Reference to a Value
// --------------------------------------------------

/*
A variable may currently refer to a value.

Later, we can assign null to indicate that
the variable should no longer refer to that value.

Example:
*/


var student = {
    name: 'Tom',
    age: 15
};

console.log(student); // ?


/*
The variable "student" currently refers to
the object containing Tom's information.

Conceptually:

student
   |
   ↓
{ name: 'Tom', age: 15 }
*/


student = null;

console.log(student); // ?


/*
Now "student" no longer refers to that object.

Conceptually:

Before:

student
   |
   ↓
{ name: 'Tom', age: 15 }


After:

student → null


Assigning null removes THIS reference to the object.

IMPORTANT:

It does not necessarily mean that the object is
immediately deleted from memory.

If no other part of the program refers to that object,
the object may later become eligible for
garbage collection.
*/


// --------------------------------------------------
// 3. Garbage Collection
// --------------------------------------------------

/*
Garbage Collection

JavaScript automatically manages memory.

The JavaScript engine can find objects that are
no longer reachable by the program and reclaim
the memory they were using.

This process is called:

Garbage Collection

In simple terms:

Object is created
        ↓
Variables refer to the object
        ↓
Those references disappear
        ↓
The object is no longer reachable
        ↓
Its memory may later be cleaned up
by the JavaScript engine
*/


// --------------------------------------------------
// 4. Functions and null
// --------------------------------------------------

/*
A function or method may also return null
when it cannot find a valid result.

A common example is:

document.querySelector()

This method searches for an HTML element.

If it finds a matching element,
it returns that element.

If it cannot find a matching element,
it returns null instead of throwing an error.

Example in folder named 2 under Nulll Type.
*/