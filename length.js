const name = "Albus Percibal Wulfric Brian Dumbledore";
const searchTerm = "d";

console.log(name.length);
console.log("type of name is: ", typeof name);
console.log(name[6]);
console.log(name.indexOf(searchTerm));
console.log(name.lastIndexOf(searchTerm));
console.log(name.includes("-"));

const firstSpace = name.indexOf(" ");
const secondSpace = name.indexOf(" ", firstSpace + 1);
console.log(" secondSapce is: ", secondSpace);
