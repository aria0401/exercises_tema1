"use strict";

// function greeting(firstName) {
//   return `hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("Harry"));

// function congreet(firstName) {
//   console.log(`hello ${firstName}`);
//   return `hello ${firstName}`;
// }

// setTimeout(congreet, 2000, "Ron");

// function hire(person) {
//   person.hired = true;
//   return person;
// }

// function fire(person) {
//   person.hired = false;
//   return person;
// }

// function fireOrHire(action, person) {
//   return action(person);
// }

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasley",
//   hired: false,
// };

// fireOrHire(hire, person4);

// fireOrHire(fire, person3);

// function star() {
//   loadJSON("animals.json", prepareData);
//   loadJSON("https://petlatkea.dk/2020/hogwarts/students.json", counData);
//   loadJSON("animals.json", counData);
// }

// function prepareData(data) {
//   console.table(data);
// }

// async function loadJSON(url, callback) {
//   const jsonData = await fetch(url);
//   const data = await jsonData.json();
//   callback(data);
// }

// function counData(data) {
//   console.log(` data's length is  ${data.length} `);
// }

// star();

// const people = ["Harry", "Hermi", "Ron", "Neville"];

// function testParms(person, index, array) {
//   array[index] = person.toUpperCase();
//   // console.log(`a:${a} b:${b} c:${c}, d:${d}`);
// }

// people.forEach(testParms);
// // console.log(testParms(people));

// const animals = [
//   {
//     name: "mandu",
//     type: "cat",
//   },
//   {
//     name: "misu",
//     type: "horse",
//   },
//   {
//     name: "cleo",
//     type: "dog",
//   },
//   {
//     name: "mia",
//     type: "snake",
//   },
// ];

// ////////////////

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// animals.forEach(isCat);
// console.log(isCat(animals[0]));
// console.log(isCat(animals[1]));
// console.log(isCat(animals[2]));
// console.log(isCat(animals[3]));

// function all(animal) {
//   return true;
// }
// function none(animal) {
//   return false;
// }

// animals.filter(all); //returns the entire array
// animals.filter(none); // returns an empty array

// const onlyCats = animals.filter(isCat); // returns only mandu

// function isDog(animal) {
//   // can just say:
//   // return animal.type === "dog";

//   // instead of:

//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const onlyDogs = animals.filter(isDog); // returns only cleo
// // const onlyDogs = animals.filter((animal) => animal.type === "dog"); // returns the same "only cleo" pero muy complicado ahora mismo :()
// console.log(onlyDogs);

// ///////////////////////

// const people = ["Harry", "Hermi", "Ron", "Neville"];

// people.sort();

// ///////////////////////

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Po",
    type: "panda",
  },
  {
    name: "Cleo",
    type: "dog",
  },
  {
    name: "Nagini",
    type: "snake",
  },
];

function sortByLastname(a, b) {
  if (a.name > b.name) {
    return -1;
  } else {
    return 1;
  }
}

animals.sort(sortByLastname);
