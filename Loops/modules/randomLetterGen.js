export default function randomLetterGen(start, end) {
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	start = alphabet.indexOf(start.toString().toUpperCase());
	end = alphabet.indexOf(end.toString().toUpperCase());
	return alphabet[Math.floor(Math.random() * (start - end)) + end];
}
