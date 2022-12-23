let result = '';
const lenght = 7;
for (let i = 1; i < lenght; i++) {
    for( let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n'; 
}
console.log(result);
 

// for(let i=1; i <= 6; i++){
//     console.log('*'.repeat(i)); 
// }