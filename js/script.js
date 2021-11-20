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

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?');
	
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
	
	
// }

// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман");
// } else {
// 	console.log("Произошла лшибка");
// }

// console.log(personalMovieDB);


// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 10;
// 	console.log(num)
// }

// showFirstMessage("Hello world!");
// console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));



// function ret() {
// 	let num = 50;

	// 
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



// const logger = function () {
// 	console.log("hello");
// };

// logger();

// const calc = (a, b) => a + b;

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));


// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 11));





let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
			personalMovieDB = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
			if (personalMovieDB.count < 10) {
			console.log("Просмотрено мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла лшибка");
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB)
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i < 2; i++){
			// let genre = prompt(`Ваш любимый жанр под номером ${i}`);


			// if (genre === '' || genre == null) {
			// 	console.log('Вы ввели некорректные данные или не ввели их вообще');
			// 	i--;
			// } else {
			// 	personalMovieDB.genres[i - 1] = genre;
			// }
			
			let genres = prompt(`Ведите ваши любимые жанры через запятую`).toLowerCase;
			if (genres === '' || genres == null) {
				console.log('Вы ввели некорректные данные или не ввели их вообще');
				i--;
			} else {
				personalMovieDB.genres = genres.split(',');
				personalMovieDB.genres.sort();
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимы жанр ${i + 1} - это ${item}`);
		});
	}	
};





// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function () {
// 		console.log("Test");
// 	}
// };

// options.makeTest();

// console.log(Object.keys(options).length); 

// const { border, bg } = options.colors;
// console.log(border);
// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);
// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log{ value };
// }




// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));





// let a = 5;
// 	b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }


















