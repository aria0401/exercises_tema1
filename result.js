"use strict";

function greetings(firstName) {
  let value = `hello ${firstName}`;
  return value;
}

const result = greetings("peter");
console.log(result); // hello peter
console.log(greetings("any name")); //hello any name
console.log(greetings()); // hello undefined
const txt = `greetings is ${greetings("any name")}`;
console.log(txt); // greetings is hello any name
greetings("peter"); // won't work if you haven't declared const result before
