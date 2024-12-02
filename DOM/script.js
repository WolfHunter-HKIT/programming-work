let body = document.querySelector("body");
let breakElements = document.createElement("br");
// Exercise 1.1
let element1 = document.createElement("p");

body.append(element1);
element1.textContent = "Iteration with probation";

// Exercise 1.2
let parentElement1 = document.createElement("div");
let childElement1 = document.createElement("p");

childElement1.textContent = "This is a child element within a div element";

body.append(parentElement1);
parentElement1.appendChild(childElement1);

// Exercise 1.3
parentElement1.setAttribute("class", "rootDiv");
parentElement1.setAttribute("id", "firstDiv");

let anchor1 = document.createElement("a");
let image1 = document.createElement("img");

anchor1.innerText = "Click me";
anchor1.setAttribute(
	"href",
	"https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"
);

image1.setAttribute(
	"src",
	"https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80"
);

body.append(anchor1, image1);

// Exercise 1.4
let parentElement2 = document.createElement("div");
body.append(parentElement2);
for (let i = 1; i <= 10; i++) {
	let childElement2 = document.createElement("p");
	childElement2.textContent = `This is Element ${i}`;
	parentElement2.append(childElement2);
}

let childElements1 = parentElement2.querySelectorAll("p");
for (let i = 0; i < childElements1.length; i++) {
	if (i % 2 != 0) {
		childElements1[i].style.backgroundColor = "green";
		childElements1[i].style.color = "white";
	} else {
		childElements1[i].style.backgroundColor = "black";
		childElements1[i].style.color = "red";
	}
}

// Exercise 1.5
let input = document.createElement("input");
input.setAttribute("type", "text");
body.append(input);

console.log(input.value);

input.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		let displayInput = document.createElement("p");
		displayInput.textContent = input.value;
		body.append(displayInput);
	}
});

// Exercise 1.6
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let elementBlock = document.createElement("div");

button1.innerText = "Add Child";
button2.innerText = "Remove Child";

button1.style.height = "25px";
button1.style.border = "2px solid black";
button2.style.height = "25px";
button2.style.border = "2px solid black";

let childrenCount = 1;
button1.addEventListener("click", () => {
	let newElement = document.createElement("p");
	newElement.textContent = `I am child Nr.${childrenCount}`;
	childrenCount++;
	elementBlock.append(newElement);
});
button2.addEventListener("click", () => {
	elementBlock.removeChild(elementBlock.lastChild);
});

body.append(button1, button2, elementBlock);

// Exercise 1.7
let container = document.createElement("div");
let button3 = document.createElement("button");
let countDisplay = document.createElement("p");
let clickerCount = 1;

button3.innerText = "Clicker";
button3.style.height = "25px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

button3.addEventListener("click", () => {
	countDisplay.textContent = clickerCount;
	clickerCount++;
});

body.append(container);
container.append(button3, countDisplay);

// Exercise 2.1 & Exercise 2.2
for (let i = 1; i <= 5; i++) {
	let newElement = document.createElement("p");
	newElement.textContent = `I am a new Element Nr.${i}`;
	newElement.setAttribute("id", `newChild${i}`);
	newElement.setAttribute("class", `newChildren`);
	if (i > 2 && i <= 4) {
		newElement.setAttribute("class", `newChildClass`);
	}
	body.append(newElement);
}

// Exercise 2.3
let newChild1 = document.getElementById("newChild1");
let newChildren1 = document.getElementsByClassName("newChildClass");
// let newChild3 = document.querySelector("p#newChild3");
// let newChildren = document.querySelectorAll("p.newChildren");

console.log(newChild1, newChildren1);

// Exercise 3
let button4 = document.createElement("button");
let rows = document.createElement("input");
let columns = document.createElement("input");
let table = document.createElement("table");

button4.innerText = "Create Table";
rows.setAttribute("type", "number");
rows.setAttribute("placeholder", "Choose Rows");
rows.setAttribute("id", "tableRows");
columns.setAttribute("type", "number");
columns.setAttribute("placeholder", "Choose Columns");
columns.setAttribute("id", "tableCols");

body.append(button4, rows, columns);

button4.addEventListener("click", () => {
	console.log("created");
	rows = document.getElementById("tableRows").value;
	columns = document.getElementById("tableCols").value;
	for (let i = 0; i < rows; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < columns; j++) {
			let col = document.createElement("td");
			row.append(col);
		}
		table.append(row);
	}
	body.append(table);
});
