"use strict";
let person1 = {
  firstName: "peter",
  age: 29,
  student: false,
};

let person2 = {
  firstName: "other peter",
  age: 28,
  student: false,
};

let person3 = person1;
person3.firstName = "changed";

// AQUI UN OBJETO QUE VOY A UTILIZAR  CON BRACKET NOTATION EN LUGAR DE DOT NOTATION

let object = {
  firstName: "other peter",
  age: 28,
  school: "KEA",
};
//AQUI FUNCIONA CON UNA VARIABLE QUE HAGO CON UNA SOLA PROPIEDAD, EN ESTE CASO: "firstName"
console.log("firstName is: ", object.firstName);
console.log("firstName is: ", object["firstName"]);
const propiedad = "firstName";
console.log("firstName is: ", object[propiedad]);

// Y AQUI FUNCIONA CON VARIAS EN UN forEach LOOP: ["firstName", "age", "school"]
const name = ["firstName", "age", "school"];
name.forEach((property) => {
  console.log(`object's ${property} is:  ${object[property]}`);
});

//TODO: seguir luego..AQUI UNA MANERA DE HACER UN PROTOTYPO Y LUEGO OTRO OBEJOTO CON Object.create()
const Animal = {
  name: "",
  type: "unknow",
  description: "",
  age: 0,
};

const animal = Object.create(Animal);
Animal.image = "image.jpg";
console.log(animal);
console.log(animal.image);

const another = Object.create(Animal);

animal.name = "first";
another.name = "another";
