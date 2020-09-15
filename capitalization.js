"use strict";

// const name = "ariadna";

// const upperLetter = name.substring(0, 1);
// const theUpperletter = upperLetter.toUpperCase();
// const theString = name.substring(1);

// console.log(`${theUpperletter}${theString}`);
//HASTA AQUI FUE LA SEMANA PASADA//

function capitalize(strg) {
  let capital =
    strg.substring(0, 1).toUpperCase() + strg.substring(1).toLowerCase();
  // console.log(capital);
  return capital;
}

const result = capitalize("aRiaDna");
console.log(result);

// capitalize("aRiaDna");
