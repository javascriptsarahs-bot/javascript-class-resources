/*
Template literals are useful when we want to write
HTML code inside JavaScript.

Because template literals allow multiple lines,
the HTML structure is easier to read.
*/

var template = `
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
`;

console.log(template);

var template2 = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template2);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
*/

// Put the HTML stored in "template"
// inside the element with id="menu"

document.getElementById('menu').innerHTML = template;