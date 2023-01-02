// ) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    let str = '';
    arr.lenght ===0 ?  str = 'Family is empty' : str = 'Family members';
    arr.forEach(member => {
        str += ` ${member} `;
    });
    return str;
}showFamily(family);
console.log(showFamily(family));
