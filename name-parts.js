"use strict";

// const name = "Ariadna Victorero Ravelo";

// const firstSpace = name.indexOf(" ");
// const secondSpace = name.indexOf(" ", firstSpace + 1);
// const thirdSpace = name.indexOf(firstSpace, secondSpace);
// //nohace falta el tercero en realidad

// const firstName = name.substring(0, firstSpace);
// const middledName = name.substring(firstSpace + 1, secondSpace);
// //el +1 es para evitar el extra espacio
// const lastName = name.substring(secondSpace + 1);

// console.log(`First name: ${firstName}
// Middle name: ${middledName}
// Last name: ${lastName}`);

// it would be much easier if instead of using secondSpace and thirdSpace,
// I make a lastSpace with lastIndexOf(" ")

//HASTA AQUI FUE LA SEMANA PASADA//

// function getNameParts(fullname) {
//   const firstSpace = fullname.indexOf(" ");
//   const secondSpace = fullname.indexOf(" ", firstSpace + 1);

//   const firstName = fullname.substring(0, firstSpace);
//   const middledName = fullname.substring(firstSpace + 1, secondSpace);
//   const lastName = fullname.substring(secondSpace + 1);

//   console.log(`First name: ${firstName}
// Middle name: ${middledName}
// Last name: ${lastName}`);

//   console.log({ firstName, middledName, lastName });
// }
// getNameParts("ariadna victorero ravelo");

// WITH PARAMETERS

// function fullname(lastName, firstName, middleName) {
//   let fullName = `${firstName} ${middleName} ${lastName}`;
//   //   console.log(fullName);
//   if (middleName === undefined) {
//     fullName = `${firstName} ${lastName}`;
//   }
//   console.log(fullName);
// }

// fullname("ariadna", "ravelo");

// WITH RETURN

// function fullname(lastName, firstName, middleName) {
//   let fullName = `${firstName} ${middleName} ${lastName}`;
//   //   console.log(fullName);
//   if (middleName === undefined) {
//     fullName = `${firstName} ${lastName}`;
//   }
//   return fullName;
// }

// function fullname(lastName, firstName, middleName) {
//   let fullName = firstName;
//   if (middleName) {
//     fullName += middleName;
//   }
//   fullName += lastName;
//   return fullName;
// }

// const result = fullname("ravelo", "ariadna", "victorero");
// console.log(result);
// console.log(fullname("victorero", "ariadna")); // this is the same as the two first

function capitalize(strg) {
  let capital =
    strg.substring(0, 1).toUpperCase() + strg.substring(1).toLowerCase();
  return capital;
}

function getNameParts(strg) {
  let name = strg.split(" ");

  let firstName;
  let middleName;
  let lastName;

  if (name.length === 2) {
    firstName = capitalize(name[0]);
    lastName = capitalize(name[1]);
  } else if (name.length > 2) {
    firstName = capitalize(name[0]);
    middleName = capitalize(name[1]);
    lastName = capitalize(name[2]);
  }

  return { firstName, middleName, lastName };
}
console.log(getNameParts("albus dumbledore percibal"));

function mockify(str) {
  let myArray = Array.from(str);
  let randomCharacter = Math.floor(Math.random() * myArray.length);
  console.log(randomCharacter);
  return myArray;
}

console.log(mockify("ariadna"));
