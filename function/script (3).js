/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberOfFilms;
function start(){
    numberOfFilms = prompt('How many films you see?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('How many films you see?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

        function remeberMyFilms(){
          for (let i = 0; i < 2; i++) {
            const a = prompt('Last film what you saw?', ''),
                  b =  prompt('how do you rate the movie??', '');
                  if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                  }
                  else {
                    console.log('error');
                    i--;
                  }
                }  
        }
       
        remeberMyFilms();
             
function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
        console.log('slabakas');
            }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
              console.log('neblogai');
            }else if (personalMovieDB.count >= 30){
              console.log('kieciaks');
            }else {
              console.log('ivyko klaida');
            }
          }

          detectPersonalLevel();
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt (`Ваш любимый жанр под номером ${ i }`);
//     personalMovieDB.genres [i - 1] = genre;
//   }
// }
// writeYourGenres();

// galima ir lengviau

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${ i }`);
  }
}
writeYourGenres();