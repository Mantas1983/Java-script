// const soldier =  {
//     helath: 400,
//     armor: 100
//     };
//     const john = {
//         health: 100
//     };
//     Object.setPrototypeOf(john, soldier);
//     console.log(john.armor);

    // galima ir kitaip be antro  kintamojo
    const soldier1 =  {
        helath: 400,
        armor: 100,
        sayHello: function() {
            console.log('hello');
        }
        };
        const john1 = Object.create(soldier1);
        john1.sayHello();