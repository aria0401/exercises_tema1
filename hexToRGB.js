"use strcit";

//HEX TO RGB with return

function hexToRGB(color) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5), 16);
    // console.log(r);
    // console.log(g);
    // console.log(b);
    // console.log({ r, g, b });
    return {
        r,
        g,
        b
    };
}
// hexToRGB("#facade");
console.log(hexToRGB("#facade"));

//RGB TO HEX

function rgbToHex(obj) {
    let r = obj.r.toString(16).padStart(2, "0");
    let g = obj.g.toString(16).padStart(2, "0");
    let b = obj.b.toString(16).padStart(2, "0");
    return {
        r,
        g,
        b
    };
    // console.log(`#${r}${g}${b}`);
    // console.log({ r, g, b });
}

const color = {
    r: 12,
    g: 2,
    b: 17,
};
console.log(rgbToHex(color));
// rgbToHex(color);
// console.log(color);

//CSS TO RGB

// function cssToRGB(strg) {
//   let smallString = strg.substring(
//     strg.indexOf("(") + 1,
//     strg.lastIndexOf(")")
//   );
//   let r = parseInt(smallString.substring(0, smallString.indexOf(",")), 10);
//   console.log(r);
//   let g = parseInt(
//     smallString.substring(
//       smallString.indexOf(",") + 2,
//       smallString.lastIndexOf(",") + 2
//     ),
//     10
//   );
//   console.log(g);
//   let b = parseInt(smallString.substring(smallString.lastIndexOf(",") + 2), 10);
//   console.log(b);

//   console.log(typeof r);
//   console.log(r, g, b); // returns 192 13 1
//   console.log({ r, g, b });
// }
// cssToRGB("rgb(192, 13, 1)");

//CSS TO RGB much easier!!

// function cssToRGB(strg) {
//   let number = strg.slice(4, -1).split(", ");
//   const r = Number(number[0]);
//   const g = Number(number[1]);
//   const b = Number(number[2]);
//   return `${r}, ${g}, ${b}`;
// }

// const value = cssToRGB("rgb(192, 13, 1)");
// console.log(value); // gives 192, 13, 1


// from Stackoverflow

//
//function hslToRgb(h, s, l) {
//  var r, g, b;
//
//  if (s == 0) {
//    r = g = b = l; // achromatic
//  } else {
//    var hue2rgb = function hue2rgb(p, q, t) {
//      if (t < 0) t += 1;
//      if (t > 1) t -= 1;
//      if (t < 1 / 6) return p + (q - p) * 6 * t;
//      if (t < 1 / 2) return q;
//      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//      return p;
//    };
//
//    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//    var p = 2 * l - q;
//    r = hue2rgb(p, q, h + 1 / 3);
//    g = hue2rgb(p, q, h);
//    b = hue2rgb(p, q, h - 1 / 3);
//  }
//  let returned = [
//    Math.round(r * 255),
//    Math.round(g * 255),
//    Math.round(b * 255),
//  ];
//  console.log(returned);
//  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];


// /**
//  * Converts an HSL color value to RGB. Conversion formula
//  * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
//  * Assumes h, s, and l are contained in the set [0, 1] and
//  * returns r, g, and b in the set [0, 255].
//  *
//  * @param   {number}  h       The hue
//  * @param   {number}  s       The saturation
//  * @param   {number}  l       The lightness
//  * @return  {Array}           The RGB representation
//  */
}
