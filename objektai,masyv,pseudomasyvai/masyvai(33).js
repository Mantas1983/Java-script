"use strict";
// istrina paskutine reiksme masyvo
// const arr = [1, 2, 4, 5, 8];
// arr.pop();
// console.log(arr);

// prideda reiksme gale masyvo
// const arr = [1, 2, 4, 5, 8];
// arr.push(10);
// console.log(arr);

// jei norima perrinkti visa masyva
// const arr = [1, 2, 4, 5, 8];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// kitas budas perrinkti Masyva
// const arr = [1, 2, 4, 5, 8];
// for (let value of arr) {
//     console.log(value);
// }
// metodas forEach panasiai kaip ir anie tik leidzia atlikt daugiau funkciju
// const arr = [1, 2, 4, 5, 8];
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} masyve ${arr}`);
// });

// metodas sort str sortiruos pagal abecele,o skaicius reiks papildomos funkcijos:
const arr = [1, 2, 14, 25, 8];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}