// budai kopijuoti objektus,per funkcija(pavirsutiniskas klonavimas);

// 'use strict';
// const obj = {
//     a: 2,
//     b: 5
// };
// function copy(mainObject) {
//     let objCopy = {};
//     let key;
//     for(key in mainObject){
//         objCopy[key] = mainObject[key];
//     }
//     return objCopy;
// }
// console.log(obj);





// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

// // patalpinti viena objektai kita:

// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const add = {
//     e: 5,
//     f: 23
// };
// console.log(Object.assign(number, add));

// galima ir tuscia objekta clonuoti
// const add = {
//     e: 5,
//     f: 23
// };
// const clone = Object.assign({}, add);
// clone.e = 25;
// console.log(add);
// console.log(clone);


// masyvu klonavimas:
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'lopinys';
// console.log(newArray);
// console.log(oldArray);

// naujas metodas persukimo(es6 galima tik masyvam, o es8 jau ir objektus)

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [1, 2, 3];
log(... num);



