// // for loop 1.
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// // for loop 2.
// for (let i = 10; i >= 1; i--) {
// 	console.log(i);
// }

// // for loop 3.
// for (let i = 1; i <= 10; i = i + 2) {
// 	console.log(i);
// }

// // for loop 4.
// for (let i = 0; i <= 10; i++) {
// 	console.log(i * 2);
// }

// // for loop 5.
// let array = [];
// for (let i = 0; i <= 5; i++) {
// 	if (i == 3) {
// 		break;
// 	}
// 	array.push(i);
// 	console.log(array);
// }

// // for loop 6.
// for (let i = 0; i <= 10; i++) {
// 	if (i == 7) {
// 		continue;
// 	}
// 	console.log(i);
// }

// // for ... in 1.
// const leFamily = {
// 	me: 33,
// 	father: 55,
// 	mother: 53,
// 	sister: 32,
// 	brother1: 28,
// 	brother2: 25,
// 	aunt: 61,
// 	uncle: 60,
// 	cousin1: 37,
// 	cousin2: 37,
// 	grandfather1: 79,
// 	grandmother1: 77,
// 	grandfather2: 81,
// 	grandmother2: 80,
// 	cat: 3,
// 	dog: 7,
// 	parrot: 2,
// };

// let calc = 0;
// for (let key in leFamily) {
// 	if (leFamily[key] > 65) {
// 		calc++;
// 	}
// }

// console.log(calc);

// // for ... in 2.
// let equal = 0;
// let odd = 0;

// for (let key in leFamily) {
// 	if (leFamily[key] % 2 == 0) {
// 		equal++;
// 	} else {
// 		odd++;
// 	}
// }

// console.log(`Equal: ${equal}, Odd: ${odd}`);

// // for ... of 1.

// const newArray = Object.values(leFamily);
// let arraySum = 0;
// for (let value of newArray) {
// 	arraySum = arraySum + value;
// }

// console.log(arraySum);

// // for ... of 2.
// const words = ["Geros", "dienytes", "skanios", "kavytes"];

// for (let value of words) {
// 	console.log(`${value} - ${value.length} raides`);
// }

// // while 1.
// let num = 1;
// while (num <= 10) {
// 	console.log(num);
// 	num++;
// }

// // while 2.
// let num2 = 10;
// while (num2 >= 1) {
// 	console.log(num2);
// 	num2--;
// }

// // while 3.
// num = 1;
// while (num <= 10) {
// 	console.log(num);
// 	num = num + 2;
// }

// // do ... while 1.
// let avg = 0;
// let entries = 0;
// let total = 0;
// num = 0;

// // do {
// // 	total = total + num;
// // 	num = Number(prompt("Enter a number"));
// // 	entries++;
// // } while (num > 0);
// // avg = total / entries;
// // console.log(avg);

// // do ... while 2.
// // num = 0;
// // let generated = Math.floor(Math.random() * (10 - 1)) + 1;
// // do {
// // 	num = Number(prompt("Guess the number"));
// // 	if (num > generated) {
// // 		console.log("Skaičius per didelis");
// // 	} else if (num < generated) {
// // 		console.log("Skaičius per mažas");
// // 	} else {
// // 		console.log("Astpėjai!");
// // 	}
// // } while (num != generated);

// // pratybos 1.
// num = -9;
// while (num.toString().length < 2) {
// 	console.log(num);
// 	num++;
// }

// // pratybos 2.
// num = -9;
// while (num.toString().length < 2) {
// 	console.log(num * num);
// 	num++;
// }

// // pratybos 3.
// num = -99;
// while (num.toString().length < 3) {
// 	if (num % 2 == 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

// // pratybos 4.
// num = 1;
// let selectedNum = Number(prompt("Įveskite skaičių"));

// if (selectedNum > 0) {
// 	while (num <= selectedNum) {
// 		console.log(num);
// 		num++;
// 	}
// }

// // pratybos 5.
// let start = Number(prompt("Intervalo pradžia"));
// let end = Number(prompt("Intervalo pabaiga"));

// while (start <= end) {
// 	console.log(start);
// 	start++;
// }

// // pratybos 6.
// num = 1;
// let times = Number(prompt("Kiek kartų spausdinti vardą?"));

// while (num <= times) {
// 	console.log("Gytis");
// 	num++;
// }

// // pratybos 7.
// num = Number(prompt("Įveskite skaičių"));
// console.log("Prat 7");

// for (let i = 1; i <= 10; i++) {
// 	console.log(`${num} * ${i} = ${num * i}`);
// }

// // pratybos 8.
// start = -10;
// end = 10;

// while (start <= end) {
// 	let y = 7 * 2 + 5 * start - 3;
// 	console.log(y);
// 	start++;
// }

// // pratybos 9.
// avg = 0;
// entries = 1;
// total = 0;
// let n = Number(prompt("Kiek atvežta eglučių?"));

// while (entries <= n) {
// 	num = Number(prompt(`Įveskite ${entries} eglutės aukštį`));
// 	total = total + num;
// 	entries++;
// }
// avg = total / entries;
// alert(`Vidutinis eglutės aukštis yra ${avg}`);

// // pratybos 1.
// let secondArray = [1, "old", 93, 10, "Telegram"];

// for (let i = 0; i < secondArray.length; i++) {
// 	console.log(secondArray[i]);
// }

// secondArray.forEach((element) => console.log(element));

// // pratybos 2.

// let thirdArray = [1, 3, 10, 93, 88, 54, 12, 43, 65, 7];
// sum = 0;

// for (let i = 0; i < thirdArray.length; i++) {
// 	sum = sum + thirdArray[i];
// }

// sum = 0;
// thirdArray.forEach((element) => (sum = sum + element));

// sum = 0;
// let reduceSum = thirdArray.reduce((prev, curr) => prev + curr, sum);

// // pratybos 3.
// let sentence = "Kaip manai, ar tai tikrai yra tikra, ar tai netikra?";
// sentence.split(" ");
// let equalSentence = [];
// let oddSentence = [];

// for (i = 0; i < sentence.length; i++) {
// 	if (i % 2 == 0) {
// 		equalSentence.push(sentence[i]);
// 	} else {
// 		odd.push(sentence[i]);
// 	}
// }

// equalSentence = equalSentence.toString();
// oddSentence = oddSentence.toString();

// // pratybos 4.
// thirdArray = [10408, 3940, 100, 9403, 8408, 5440, 4402, 4340, 6405, 7777];
// let min = thirdArray[0];

// for (let i = 0; i < thirdArray.length; i++) {
// 	if (thirdArray[i] < min) {
// 		min = thirdArray[i];
// 	}
// }

// thirdArray.splice(
// 	thirdArray.indexOf(min),
// 	1,
// 	Number(min.toString().slice(0, 1))
// );

// console.log(thirdArray);

// pratybos 1.
const carArray = [
	"BMW",
	"Audi",
	"Tesla",
	"Solaris",
	"Volkswagen",
	"Toyota",
	"Bentley",
];

if (!carArray.includes("Bentley")) {
	console.log(`Masyve nėra Bentley`);
	carArray.push("Bentley");
} else {
	console.log(`Masyve yra Bentley`);
}

// pratybos 2.
const groceries = [6, 5, 8, 8, 1, 2, 1, 6, 2, 7, 8, 1, 2, 5, 9, 8, 6];
const uniqueGroceries = [];

for (let i = 0; i < groceries.length; i++) {
	if (uniqueGroceries.indexOf(groceries[i]) == -1) {
		uniqueGroceries.push(groceries[i]);
	}
}

console.log(uniqueGroceries);

// pratybos 3.
const fruits = [
	"Apples",
	"Dragon fruits",
	"Grapes",
	"Apples",
	"Lemon",
	"Grapes",
	"Pears",
	"Dragon fruits",
	"Grapes",
	"Watermelon",
	"Tangerine",
];
const uniqueFruits = [];

for (let i = 0; i < fruits.length; i++) {
	if (!uniqueFruits.includes(fruits[i])) {
		uniqueFruits.push(fruits[i]);
	}
}

console.log(uniqueFruits);

// pratybos 4
const numbers = [
	37, 91, 56, 62, 61, 34, 32, 42, 48, 69, 95, 24, 59, 64, 45, 74, 96, 29, 80,
	33, 63, 55, 83,
];
const names = [
	"Vytautas",
	"Raivydas",
	"Ignas",
	"Salvinas",
	"Viktorija",
	"Gytis",
];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 == 0) {
		let rngInt = Math.floor(Math.random() * (names.length - 0)) + 0;
		numbers.splice(i, 1, names[rngInt].toUpperCase());
		console.log(`Spliced ${names[rngInt]}`);
	}
}
console.log(numbers);

// pratybos 4.1

let duomenys = {
	id: "0001",
	type: "donut",
	name: "Cake",
	ppu: 0.55,
	topping: [
		{ id: "5001", type: "None" },
		{ id: "5002", type: "Glazed" },
		{ id: "5005", type: "Sugar" },
		{ id: "5007", type: "Powdered Sugar" },
		{ id: "5006", type: "Chocolate with Sprinkles" },
		{ id: "5003", type: "Chocolate" },
		{ id: "5004", type: "Maple" },
	],
};

for (let i = 0; i < duomenys.topping.length; i++) {
	console.log(
		`id: ${duomenys.topping[i].id}, type: ${duomenys.topping[i].type}`
	);
}

// pratybos 5.1
let knygos = [
	{
		isbn: 9786098233346,
		price: 7.99,
		year: 2006,
		title: "Bloga dukte",
		pagecount: 250,
	},
	{
		isbn: 9786098233391,
		price: 7.99,
		year: 2015,
		title: "Mergina kuria jis pazinojo",
		pagecount: 315,
	},
	{
		isbn: 9786099609324,
		price: 7.99,
		year: 2019,
		title: "Tapk ragana",
		pagecount: 150,
	},
	{
		isbn: 9786094792250,
		price: 6.99,
		year: 2007,
		title: "Sfera",
		pagecount: 450,
	},
	{
		isbn: 9786094792335,
		price: 9.99,
		year: 2019,
		title: "Mes susitinkame cia",
		pagecount: 500,
	},
	{
		isbn: 9786094273780,
		price: 7.99,
		year: 2019,
		title: "Sunaikinimas",
		pagecount: 509,
	},
	{
		isbn: 9786098233483,
		price: 12.99,
		year: 2018,
		title: "Artemide",
		pagecount: 199,
	},
	{
		isbn: 9786094273872,
		price: 4.99,
		year: 2015,
		title: "Fondas ir imperija",
		pagecount: 185,
	},
	{
		isbn: 9786094273902,
		price: 7.99,
		year: 2019,
		title: "Amzinybes fjordo pranasai",
		pagecount: 333,
	},
	{
		isbn: 9786094442742,
		price: 5.99,
		year: 2004,
		title: "Bejegiai",
		pagecount: 777,
	},
	{
		isbn: 9786094442940,
		price: 14.99,
		year: 2019,
		title: "Klajunai",
		pagecount: 172,
	},
	{
		isbn: 9786090404386,
		price: 7.99,
		year: 2015,
		title: "Mergina, kuri pakliuvo i voratinkli",
		pagecount: 356,
	},
];

let family = {
	grandparents: {
		grandma: "Marge",
		grandpa: "Homer",
	},
	parents: {
		mom: "Lisa",
		dad: "Millhouse",
	},
	children: {
		daughter: "Anne",
		son1: "Peter",
		son2: "Bob",
	},
};

for (let element in family) {
	console.log(`${element}: ${Object.values(family[element])}`);
}

console.log("-----------------------------------");
for (let i = 0; i < knygos.length; i++) {
	console.log(`isbn --> ${knygos[i].isbn}`);
	console.log(`price --> ${knygos[i].price}`);
	console.log(`year --> ${knygos[i].year}`);
	console.log(`title --> ${knygos[i].title}`);
	console.log(`pagecount --> ${knygos[i].pagecount}`);
	console.log("-----------------------------------");
}

const recentBooks = [];

for (let element in knygos) {
	console.log(element);
	if (knygos[element].year > 2015) {
		recentBooks.push(knygos[element].title);
	}
}
console.log(`${recentBooks}`);

let filtered = knygos
	.filter((book) => book.year > 2015)
	.map((book) => book.title);
console.log(`${filtered}`);

// pratybos 6.1
const familyTotal = [147, 312, 58];
for (let i = 0; i < familyTotal.length; i++) {
	if (familyTotal[i] < 50) {
		familyTotal[i] = familyTotal[i] + familyTotal[i] * 0.2;
	}
	if (familyTotal[i] > 50 && familyTotal[i] < 200) {
		familyTotal[i] = familyTotal[i] + familyTotal[i] * 0.15;
	} else {
		familyTotal[i] = familyTotal[i] + familyTotal[i] * 0.1;
	}
}
console.log(familyTotal);

// // pratybos 7.1
// const questions1 = [
// 	{
// 		id: 1,
// 		question: "Kuri HTML versija yra naudojama šiuo metu?",
// 		answers: [
// 			{ text: 2, isCorrect: false },
// 			{ text: 5, isCorrect: true },
// 			{ text: 7, isCorrect: false },
// 			{ text: 3, isCorrect: false },
// 			{ text: 8.3, isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 2,
// 		question:
// 			"Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
// 		answers: [
// 			{ text: "<news>", isCorrect: false },
// 			{ text: "<article>", isCorrect: true },
// 			{ text: "<section>", isCorrect: false },
// 			{ text: "<main>", isCorrect: false },
// 			{ text: "Nėra teisingo atsakymo", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 3,
// 		question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
// 		answers: [
// 			{ text: "inline", isCorrect: true },
// 			{ text: "block", isCorrect: false },
// 			{ text: "inline-block", isCorrect: false },
// 			{ text: "table", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 4,
// 		question:
// 			"Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
// 		answers: [
// 			{ text: "a[href >='.pdf']", isCorrect: false },
// 			{ text: "a[href $='.pdf']", isCorrect: false },
// 			{ text: "a[href only ='.pdf']", isCorrect: false },
// 			{ text: "a[href='.pdf']", isCorrect: true },
// 			{ text: "Nėra teisingo atsakymo", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 5,
// 		question:
// 			"Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
// 		answers: [
// 			{ text: ".columns-5-offset-1", isCorrect: false },
// 			{ text: ".col-sm5-1", isCorrect: false },
// 			{ text: ".col-sm-5 .col-offset-1", isCorrect: false },
// 			{ text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
// 		],
// 	},
// 	{
// 		id: 6,
// 		question:
// 			"Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
// 		answers: [
// 			{ text: "antraste.style.background-color = 'tomato';", isCorrect: false },
// 			{ text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
// 			{ text: "antraste.css.background-color= 'tomato';", isCorrect: false },
// 			{ text: "Teisingo atsakymo nėra", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 7,
// 		question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
// 		answers: [
// 			{ text: "@include isorinis_failas", isCorrect: false },
// 			{ text: "@add isorinis_failas", isCorrect: false },
// 			{ text: "@import isorinis_failas", isCorrect: true },
// 			{ text: "Nėra teisingo varianto", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 8,
// 		question:
// 			"Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
// 		answers: [
// 			{ text: "extend a:hover", isCorrect: false },
// 			{ text: "into a:hover", isCorrect: false },
// 			{ text: "&:hover", isCorrect: true },
// 			{ text: "@:hover", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 9,
// 		question: "Kuris iš sąrašo nėra preprocesorius?",
// 		answers: [
// 			{ text: "Ruby", isCorrect: true },
// 			{ text: "SASS", isCorrect: false },
// 			{ text: "LESS", isCorrect: false },
// 			{ text: "Stylus", isCorrect: false },
// 			{ text: "Nėra teisingo varianto", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 10,
// 		question:
// 			"Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
// 		answers: [
// 			{ text: "$('header').diplayNone();", isCorrect: false }, //nezinau
// 			{ text: "$('header').hide();", isCorrect: true },
// 			{ text: "$('header').hideIt();", isCorrect: false },
// 			{ text: "Nėra teisingo atsakymo.", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 11,
// 		question: "Kokią template sistemą naudoja Drupal 8?",
// 		answers: [
// 			{ text: "HTML", isCorrect: false },
// 			{ text: "Smarty", isCorrect: false },
// 			{ text: "Twig", isCorrect: true },
// 			{ text: "PHP", isCorrect: false },
// 			{ text: "Nėra teisingo varianto", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 12,
// 		question: "Kuo skiriasi kintamieji let nuo var ?",
// 		answers: [
// 			{ text: "Nesiskiria", isCorrect: false },
// 			{
// 				text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
// 				isCorrect: true,
// 			},
// 			{
// 				text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
// 				isCorrect: false,
// 			},
// 			{
// 				text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
// 				isCorrect: false,
// 			},
// 			{ text: "Nėra teisingo atsakymo", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 13,
// 		question: "Kam naudojamas 'use strict'?",
// 		answers: [
// 			{
// 				text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
// 				isCorrect: false,
// 			},
// 			{
// 				text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
// 				isCorrect: false,
// 			},
// 			{
// 				text: "Išjungia painias ir blogai apgalvotas funkcijas",
// 				isCorrect: false,
// 			},
// 			{ text: "Visi atsakymai tesisingi", isCorrect: true },
// 			{ text: "Nėra teisingo atsakymo", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 14,
// 		question: "Kodėl CSS vadinami pakopiniais stiliais?",
// 		answers: [
// 			{ text: "Kodas rašomas pakopomis", isCorrect: false },
// 			{
// 				text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
// 				isCorrect: true,
// 			},
// 			{
// 				text: "Įjungus CSS pakopas, galima naudoti !important",
// 				isCorrect: false,
// 			},
// 			{ text: "Teisingo atsakymo nėra", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 15,
// 		question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
// 		answers: [
// 			{ text: "count", isCorrect: false },
// 			{ text: "length", isCorrect: true },
// 			{ text: "valueOf", isCorrect: false },
// 			{ text: "Nėra teisingo atsakymo", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 16,
// 		question: "Kiek laiko duomenys saugomi local storage?",
// 		answers: [
// 			{ text: "Iki perkraunant puslapį", isCorrect: false },
// 			{ text: "Vieną parą", isCorrect: false },
// 			{ text: "Vieną mėnesį", isCorrect: false },
// 			{ text: "Metus laiko", isCorrect: false },
// 			{ text: "Neturi galiojimo laiko", isCorrect: true },
// 		],
// 	},
// 	{
// 		id: 17,
// 		question:
// 			"let kiekis = 12; \n" +
// 			"console.log(++kiekis); \n" +
// 			"Ką išves konsolėje?",
// 		answers: [
// 			{ text: "undefined", isCorrect: false },
// 			{ text: "12", isCorrect: false },
// 			{ text: "13", isCorrect: true },
// 			{ text: "Nieko", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 18,
// 		question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
// 		answers: [
// 			{ text: "shift()", isCorrect: false },
// 			{ text: "pop()", isCorrect: false },
// 			{ text: "splice()", isCorrect: false },
// 			{ text: "split()", isCorrect: true },
// 		],
// 	},
// 	{
// 		id: 19,
// 		question:
// 			"function sveikas(){ \n" +
// 			' let vardas="Jonas" \n' +
// 			"console.log(vardas)\n" +
// 			"} \n" +
// 			"sveikas();\n" +
// 			"Ką atspausdins konsolėje?",
// 		answers: [
// 			{ text: "Jonas", isCorrect: true },
// 			{ text: "vardas", isCorrect: false },
// 			{ text: "sveikas", isCorrect: false },
// 			{ text: "undefined", isCorrect: false },
// 			{ text: "nieko", isCorrect: false },
// 		],
// 	},
// 	{
// 		id: 20,
// 		question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
// 		answers: [
// 			{ text: "const sass spalva;", isCorrect: false },
// 			{ text: "const spalva;", isCorrect: false },
// 			{ text: "let spalva;", isCorrect: false },
// 			{ text: "$spalva string", isCorrect: false },
// 			{ text: "$spalva", isCorrect: true },
// 		],
// 	},
// ];

// for (let element in questions1) {
// 	console.log(questions1[element].question);
// 	for (let fraction in questions1[element].answers) {
// 		if (questions1[element].answers[fraction].isCorrect) {
// 			console.log(questions1[element].answers[fraction].text);
// 		}
// 	}
// }

// pratybos 7.2
// 5 questions, 4 choices each
const trivia = [
	{
		question: "What is the best-selling video game of all time?",
		answers: [
			{ text: "Minecraft", isCorrect: true },
			{ text: "Tetris", isCorrect: false },
			{ text: "Grand Theft Auto V", isCorrect: false },
			{ text: "The Legend of Zelda: Breath of the Wild", isCorrect: false },
		],
	},
	{
		question: "In which year was the first 'Call of Duty' game released?",
		answers: [
			{ text: "2005", isCorrect: false },
			{ text: "2003", isCorrect: true },
			{ text: "2001", isCorrect: false },
			{ text: "2007", isCorrect: false },
		],
	},
	{
		question: "Which game features the fictional city of Los Santos?",
		answers: [
			{ text: "Watch Dogs", isCorrect: false },
			{ text: "Cyberpunk 2077", isCorrect: false },
			{ text: "Grand Theft Auto V", isCorrect: true },
			{ text: "The Sims", isCorrect: false },
		],
	},
	{
		question: "What is the main objective in the game 'Pac-Man'?",
		answers: [
			{ text: "Eat all the dots while avoiding ghosts", isCorrect: true },
			{ text: "Defeat bosses", isCorrect: false },
			{ text: "Build structures", isCorrect: false },
			{ text: "Collect coins", isCorrect: false },
		],
	},
	{
		question: "Which console was released by Sony in 1994?",
		answers: [
			{ text: "Nintendo 64", isCorrect: false },
			{ text: "PlayStation", isCorrect: true },
			{ text: "Sega Saturn", isCorrect: false },
			{ text: "Xbox", isCorrect: false },
		],
	},
];
let correctAnsw = 0;
let incorrectAnsw = 0;
const letterCheck = ["A", "B", "C", "D"];

function triviaGame(quest) {
	let answer = prompt(`${trivia[quest].question}\n
		A: ${trivia[quest].answers[0].text}\n
		B: ${trivia[quest].answers[1].text}\n
		C: ${trivia[quest].answers[2].text}\n
		D: ${trivia[quest].answers[3].text}`);
	if (!letterCheck.includes(answer)) {
		console.log("Tai nėra pasiringimas. Bandyk Vėl.");
		triviaGame(quest);
	}
	switch (answer) {
		case "A":
			answer = 0;
			break;
		case "B":
			answer = 1;
			break;
		case "C":
			answer = 2;
			break;
		case "D":
			answer = 3;
			break;
	}
	console.log(answer);
	if (trivia[quest].answers[answer].isCorrect == true) {
		console.log("Teisingai!");
		correctAnsw++;
	} else {
		console.log("Neteisingai, bandyg vėl.");
		incorrectAnsw--;
		triviaGame(quest);
	}
}

for (let i = 0; i < trivia.length; i++) {
	triviaGame(i);
}
