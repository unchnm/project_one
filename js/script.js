/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');
      personalMoviesDB.movies[a] = b;
      console.log (personalMoviesDB); */

      for (let i = 0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt ('На сколько оцените его?', ''); 
           if (a == "" || a == null || a.length > 50 || b == "" || b == null || b.length > 50){
            i--;
           }     
      }