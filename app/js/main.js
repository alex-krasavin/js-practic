'use strict';
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt ("Один из последних просмотренных фильмов?", ""),
//       b = prompt ("На сколько оцените его?", ""),
//       c = prompt ("Один из последних просмотренных фильмов?", ""),
//       d = prompt ("На сколько оцените его?", "");

// personalMovieDataBase.movies [a] = b;
// personalMovieDataBase.movies [c] = d;

// for (let i = 0;i<2;i++) {
//     const a = prompt ("Один из последних просмотренных фильмов?", ""),
//           b = prompt ("На сколько оцените его?", "");
//           if (a != null && b != null && a != "" && b !="" && a.length < 50) {
//             personalMovieDataBase.movies [a] = b;
//             console.log ("ok");
//           }else {
//             console.log ("error");
//             i--;
//           }
          
// };

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log (personalMovieDB);


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// };

// let b =2;
//  while (b<=15) {  
//     b++; 
//     if (b % 2 === 0){continue}else{console.log(b)};    
// };

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;

// const arr =[];

// for(let i = 5;i<=10;i++) {  
//     arr[i-5]=i;
// }   
//     console.log(arr);
//     // return arr;

//     for (i = 20;i>10;i--) {
//         if (i===13)break;
//         console.log(i)
//     }
    
    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // // Пишем решение вот тут

    // for (let i = 0; i < arr.length; i++) {
    //     result[i] = arr[i];
    // }

    // console.log(result);
    // return result;


    // let i = 0;
    // while(i<data.length) {
    //     if(typeof (data[i]) == "string") {
    //         data[i] = data[i] + "-done"
    //     }else if (typeof (data[i]) == "number") {
    //         data[i] = data[i]*2
    //     } 
    //     i++;    
          
    // }
    //     console.log(data); 
    
    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //         result[i-1] = data[data.length - i]
    //     }
    
    //     console.log(result);
     
    
    
 