// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
 

// for ( let i = 20; i >= 10; i--) {
   
//     if ( i === 13){
//  break;
//     }
//     console.log(i);
// }

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for( let i = 2; i <= 10; i += 2) {

//     console.log(i);
// }

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }//



// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// const arrayOFNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOFNumbers[i - 5] = i;
// }
// console.log(arrayOFNumbers);
// return arrayOFNumbers;

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result);
// return(result);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = i * 2;
//     }
//     else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`; 
//     }
// }
// console.log(data);
// return(data);

// zvaigzduciu piesimas

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);