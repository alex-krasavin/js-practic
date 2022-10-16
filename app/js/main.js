'use strict';
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastSeeMovie = prompt ("Один из последних просмотренных фильмов?", "");
const filmScore = prompt ("На сколько оцените его?", "");

personalMovieDataBase.movies [lastSeeMovie] = filmScore;

console.log (personalMovieDataBase);