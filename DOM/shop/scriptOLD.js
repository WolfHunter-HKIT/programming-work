let createForm = document.getElementById("createItem");
let display = document.getElementById("existing");
let existingTable = document.createElement("table");
let editForm = document.getElementById("editItem");
let editingTable = document.createElement("table");
let updateButton = document.getElementById("updateItem");
let deleteButton = document.getElementById("deleteItem");
let selector = document.getElementById("selector");
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
	console.log(
		`Updated local storage. Added item: \nID:${id}  Name:${product} Quantity:${quantity}`
	);
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
	console.log("Local storage up to date.");
}
refreshTable();

// Insert items into storage
createForm.addEventListener("submit", (e) => {
	e.preventDefault();
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

	// Check if there are any errors / the ID is unique
	if (errorStorage.length != 0) {
		console.log("Creation Error", errorStorage);
	} else if (idStorage.indexOf(id) != -1) {
		console.log("Creation Error", idStorage.indexOf(id));
		idError.textContent = "Product ID already exists!";
		createForm.append(idError);
	} else {
		idStorage.push(id);
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
		createForm.reset(); // Doesn't work?
	}
});

// Additional variables
let selectHead = document.createElement("thead");
let selectRow = document.createElement("tr");
let selectedID;
let selectedName;
let selectedQuantity;
let displayID = document.createElement("td");
let displayName = document.createElement("td");
let displayQuantity = document.createElement("td");
let fetchError = document.createElement("p");

let updateDivider = document.createElement("h2");
let updateField = document.createElement("div");
let newName = document.createElement("input");
let newQuantity = document.createElement("input");

updateDivider.textContent = "Update";
newName.setAttribute("placeholder", "Name");
newQuantity.setAttribute("placeholder", "Quantity");
updateField.setAttribute("id", "updateField");

updateField.append(newName, newQuantity);

// Select an item
selector.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		let uniqueID = Number(selector.value);
		if (idStorage.includes(uniqueID)) {
			// Removes error if exists
			if (editForm.contains(fetchError)) {
				editForm.removeChild(fetchError);
			}

			selectedID = uniqueID;

			for (let item in storage) {
				if (storage[item].id == uniqueID) {
					selectedName = storage[item].name;
					selectedQuantity = storage[item].quantity;
				}
			}

			displayID.textContent = selectedID;
			displayName.textContent = selectedName;
			displayQuantity.textContent = selectedQuantity;

			// selectRow.appendChild(displayID);
			// selectRow.appendChild(displayName);
			// selectRow.appendChild(displayQuantity);

			editForm.insertBefore(updateDivider, editForm.childNodes[4]);
			editForm.insertBefore(updateField, editForm.childNodes[5]);

			selectRow.append(displayID, displayName, displayQuantity);
			editingTable.append(selectHead, selectRow);
			editDisplay.append(editingTable);
		} else {
			fetchError.textContent = "Please select a valid ID";
			fetchError.setAttribute("id", "error");
			editForm.append(fetchError);
			return console.log(idStorage, uniqueID);
		}
		selectHead.innerHTML = `<tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        </tr>`;
		console.log(selector.value);
	}
});

// Update selected element
updateButton.addEventListener("click", (e) => {});
