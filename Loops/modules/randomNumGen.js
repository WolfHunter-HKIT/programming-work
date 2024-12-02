export default function randomNumGen(min, max, choice) {
	// Validate that start is smaller than end
	if (min > max) {
		let tempMin = max;
		max = min;
		min = tempMin;
	}

	if (choice == "int") return Math.floor(Math.random() * (max - min)) + min;
	else {
		return Math.random() * (max - min) + min;
	}
}
