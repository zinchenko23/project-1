// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?'),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = prompt('На сколько оцените его?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// 1.2

// if (1) {
// 	console.log('ok!');
// } else {
// 	console.log('Error');
// }



	// if (num < 49) {
	// 	console.log('Error');
	// } else if (num > 100) {
	// 	console.log('Over');
	// } else {
	// 	console.log('Ok')
	// }
	
// const num = 50;

// switch (num) {
// 	case 49:
// 		console.log('Неверно');
// 		break;
// 	case 100:
// 		console.log('Неверно');
// 		break;
// 	case 50:
// 		console.log('В точку');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// 		break;
// }

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
	
// 	console.log(i);
	
// }
//........1.3

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
	
	
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла лшибка");
}

console.log(personalMovieDB);
















