"use strict";

const person1 = {
  firstName: "harry",
  lastName: "Potter",
};
const person2 = {
  firstName: "ron",
  lastName: "weasley",
};
const person3 = {
  firstName: "hermione",
  lastName: "granger",
};
const person4 = {
  firstName: "neville",
  lastName: "longbottom",
};
const person5 = {
  firstName: "gynny",
  lastName: "weasley",
};

const people = [person1, person2, person3, person4, person5];
// people.sort();

function sortByLastname(a, b) {
  if (a.lastName === b.lastName) {
    if (a.firstName < b.firstName) {
      return -1;
    } else {
      return 1;
    }
  } else if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}

people.sort(sortByLastname);
