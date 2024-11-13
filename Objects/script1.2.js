const generative = ["A", "B", "C", "D"];
function getRandomGeneration(start, end) {
	return generative[Math.floor(Math.random() * (end - start)) + start];
}
function getRandomInt(start, end) {
	return Math.floor(Math.random() * (end - start)) + start;
}

let thirdArray = [];

// 1.

thirdArray = Array(200)
	.fill(0)
	.map(() => getRandomGeneration(0, 3));

console.log(thirdArray);

// 2.

thirdArray.sort();

console.log(thirdArray);

// 3.
let fourthArray = [];

function populateFourthArray() {
	let select = getRandomInt(100, 999);
	if (fourthArray.indexOf(select) > -1) {
		populate();
	} else {
		return select;
	}
}

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}

fourthArray = Array(100)
	.fill(0)
	.map(() => populateFourthArray());
fifthArray = fourthArray.filter(onlyUnique);

console.log(fourthArray, fifthArray);
