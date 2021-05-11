/* 
an object is just a collection of named properties, a list of key-value pairs
an object can have methods, simply when a value of a property is a function
an object can be modified (almost) anytime, its properties can be added, removed, and updated
*/

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


/* 
Types of objects
There are two main types of objects:

Native: Described in the ECMAScript standard
Host: Defined by the host environment (for example, the browser environment)

*/

// native objects
// can further be categorized as built-in or user-defined
var person = {};
var d = new Date();
var cars = new Array("Saab", "Volvo", "BMW");

// host objects
history
window
location
document
XMLHttpRequest
setTimeout

