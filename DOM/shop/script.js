let createForm = document.getElementById("createItem");
let display = document.getElementById("existing");
let existingTable = document.createElement("table");
let editForm = document.getElementById("editItem");
let editingTable = document.createElement("table");
let updateButton = document.getElementById("updateItem");
let deleteButton = document.getElementById("deleteItem");
let selector = document.getElementById("Selector");
let editDisplay = document.getElementById("editing");
let inputs = [];
let idStorage = [];
let storage = [];
let errorStorage = [];

// Error Declarations
let idError = document.createElement("p");
let productError = document.createElement("p");
let quantityError = document.createElement("p");
idError.setAttribute("id", "error");
productError.setAttribute("id", "error");
quantityError.setAttribute("id", "error");

// Updates page from local storage
function getStorage() {
	let tempStorage = localStorage.getItem("items");
	if (tempStorage == null) {
		storage = [];
	} else {
		storage = JSON.parse(tempStorage);
		console.log(storage, idStorage);
		for (let item in storage) {
			idStorage.push(storage[item].id);
		}
	}
}
getStorage();

function updateStorage(id, product, quantity) {
	console.log(storage, id, product, quantity);
	storage.push({
		id: id,
		name: product,
		quantity: quantity,
	});
	localStorage.setItem("items", JSON.stringify(storage));
}

// Fetch and display existing items
function refreshTable() {
	console.log("Fetching local Storage...");
	let tableHead = document.createElement("thead");
	tableHead.innerHTML = `<tr>
                    <th>ID</th> 
                    <th>Product Name</th> 
                    <th>Quantity</th>
                </tr>`;

	for (let item in storage) {
		let row = document.createElement("tr");
		inputs = [storage[item].id, storage[item].name, storage[item].quantity];
		for (let i = 0; i < 3; i++) {
			let col = document.createElement("td");
			col.textContent = `${inputs[i]}`;
			row.append(col);
		}
		existingTable.append(tableHead, row);
	}
	display.append(existingTable);
	console.log("Local storage updated.");
}
refreshTable();

createForm.addEventListener("submit", () => {
	let id = document.getElementById("id");
	let product = document.getElementById("name");
	let quantity = document.getElementById("quantity");
	// Check if ID is truly a number, then convert it to number type

	// Display an error if ID is empty
	if (id.value == "") {
		idError.textContent = "Product ID must not be empty!";
		createForm.append(idError);
		errorStorage.push(idError);
	} else {
		id = Number(id.value);
		// Remove error message, if it exists
		if (createForm.contains(idError)) {
			createForm.removeChild(idError);
			errorStorage.slice(errorStorage.indexOf(idError));
		}
	}

	// Check if product name is empty, display an error if true
	if (product.value == "") {
		productError.textContent = "Product name must not be empty!";
		createForm.append(productError);
		errorStorage.push(productError);
	} else {
		product = product.value;
		// Remove error message, if it exists
		if (createForm.contains(productError)) {
			createForm.removeChild(productError);
			errorStorage.slice(errorStorage.indexOf(productError));
		}
	}

	// Display an error if Quantity is empty
	if (quantity.value == "") {
		quantityError.textContent = "Product Quantity must not be empty!";
		createForm.append(quantityError);
		errorStorage.push(productError);
	} else {
		quantity = Number(quantity.value);
		// Remove error message, if it exists
		if (createForm.contains(quantityError)) {
			createForm.removeChild(quantityError);
			errorStorage.slice(errorStorage.indexOf(quantityError));
		}
	}

	// Check if the ID is unique
	if (errorStorage.length != 0) {
		console.log("Creation Error", errorStorage);
	} else if (idStorage.indexOf(id) != -1) {
		console.log("Creation Error", idStorage.indexOf(id));
		idError.textContent = "Product ID already exists!";
		createForm.append(idError);
	} else {
		idStorage.push(id);

		// Create
		inputs = [id, product, quantity];
		// Creates a new row
		let row = document.createElement("tr");

		// Adds contents to said row
		for (let i = 0; i < 3; i++) {
			let col = document.createElement("td");
			col.textContent = `${inputs[i]}`;
			row.append(col);
		}
		existingTable.append(row);
		display.append(existingTable);
		updateStorage(...inputs);
		createForm.reset();
	}
});

selector.addEventListener("keypress", (e) => {
	if (e.key == enter) {
		e.preventDefault();
		let tableHead = document.createElement("thead");
		tableHead.innerHTML = `<tr>
        <th>ID</th> 
        <th>Product Name</th> 
        <th>Quantity</th>
        </tr>`;

		// let row = document.createElement("tr");
		// inputs = [storage[item].id, storage[item].name, storage[item].quantity];
		// for (let i = 0; i < 3; i++) {
		//     let col = document.createElement("td");
		//     col.textContent = `${inputs[i]}`;
		//     row.append(col);
		// }
		editingTable.append(tableHead, row);
		editDisplay.append(editingTable);
	}
});

updateButton.addEventListener("click", (e) => {});
