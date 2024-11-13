// 1.
let firstObjet = {
	firstName: "Josh",
	lastName: "Rook",
};

firstObjet.email = "example@gmail.com";

// 2. \lastName\

delete firstObjet.lastName;
console.log(firstObjet);

// 3.

console.log(firstObjet.hasOwnProperty("firstName"));

// 4. (No numbers in object)
let secondObject = {
	math: 9,
	biology: 10,
	IT: 9,
	sports: 6,
};

function sum(object) {
	return Object.values(object).reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(secondObject));

// 5.
function goodGrades(object) {
	tempObject = {};
	for (let key in object) {
		if (object[key] <= 7) {
			continue;
		}
		tempObject[key] = object[key];
	}
	return tempObject;
}
console.log(goodGrades(secondObject));

// 6.

function objectDesc(object) {
	return "";
}

// 7.

console.log(Object.keys(secondObject).length);
