const loggo = 'Hello world';
console.log(loggo.slice(5, 11));
console.log(loggo.slice(6));
console.log(loggo.substring(6, 11));
// // // toks pat kaip ir slice,tik substring negali buti neigiamu reiksmiu
// console.log(loggo.substr(6, 5));
// // pasako nu kurio simbolio ir antras per kiek simboliu..

const num = 12.2;
console.log(Math.round(num));
// apvalina skaiciu.

const test = '12.2 px';
// console.log(parseInt(test));
// pervercia eilute i paprasta skaiciu ir kita skaiciavimo sistema( pvz:desimtaine,dvejetaine)
console.log(parseFloat(test));
// isveda skaiciu su liekana


