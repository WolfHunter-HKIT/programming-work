let firstArray = [];
let above10 = 0;
let indexes = {
	highest: 0,
	numberof: 0,
	indexer: [],
};

// getRandomIntInclusive
// 1.
function generateNums(times) {
	let array = [];
	for (i = 0; i < times; i++) {
		array.push(Math.floor(Math.random() * (25 - 5)) + 5);
	}
	return array;
}

firstArray = generateNums(30);

for (let i = 0; i < firstArray.length; i++) {
	if (firstArray[i] > 10) {
		// 2. A
		above10++;
	} // 2. B
	if (firstArray[i] == Math.max(...firstArray)) {
		indexes.highest = firstArray[i];
		indexes.numberof++;
		indexes.indexer.push(i);
	}
}

// 2. C
const summary = summarise(firstArray.filter((equals) => equals % 2 == 0));

function summarise(numbers) {
	let sum = 0;
	for (i = 0; i < numbers.length - 1; i++) {
		sum = numbers[i] + numbers[i + 1];
	}
	return sum;
}

// Answer Check
console.log(firstArray, above10, indexes, summary);

// 2. D
let secondArray = firstArray;
secondArray.forEach(function (value, index) {
	value = value - index;
	secondArray.splice(index, 1, value);
});

console.log(secondArray);

// 2. E

generateNums(10).forEach((value) => firstArray.push(value));

console.log(firstArray);

// 2. F

let firstArrayDiv1 = firstArray.filter((value, index) => index % 2 != 0);
let firstArrayDiv2 = firstArray.filter((value, index) => index % 2 == 0);

console.log(firstArrayDiv1, firstArrayDiv2);

// 2. G
firstArray.forEach(function (value, index) {
	if (value > 15) {
		value = 0;
		firstArray.splice(index, 1, value);
	}
});

console.log(firstArray);

// 2. H

console.log(firstArray.findIndex((value, index) => index > 10));
