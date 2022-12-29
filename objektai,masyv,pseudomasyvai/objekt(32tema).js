'use strict';
// isaiskinti objekto ilgi
const otptions = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        background: 'red'
    }
};
console.log(Object.keys(otptions).length);

// objekte iterpiama funkcija

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};
options.makeTest();
console.log(Object.keys(options).length);