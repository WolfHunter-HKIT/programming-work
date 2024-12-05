// ---Control Panel Variables--- //
let controlPanel = document.getElementById("controlPanel"); // Master form
// Input Fields
let inputID = document.getElementById("id"); // Input
let inputName = document.getElementById("name"); // Input
let inputQuantity = document.getElementById("quantity"); // Input
// Control Panel Buttons
let insertItem = document.getElementById("insertItem"); // Button
let editItem = document.getElementById("editItem"); // Button
let deleteItem = document.getElementById("deleteItem"); // Button

// ---Shopping Cart Variables //
let cartSelect = document.getElementById("cartSelect"); // Input
let addToCart = document.getElementById("addToCart"); // Button

// ---DOM Variables--- //
let storage = document.getElementById("storage"); // Table
let cart = document.getElementById("cart"); // Table

// ---Local Storage & Misc Variables--- //
let database = localStorage.getItem("items"); // Initial fetch
let localDatabase = []; // Array for controlling localStorage
let idStorage = []; // Array for storing unique IDs
let cartIdStorage = []; // Array for storing unique cart IDs
let hasSelected = false; // Boolean for DOM updates

// --Adds an Event Listener to insert a new Item.--
insertItem.addEventListener("click", (e) => {
	e.preventDefault();

	console.log("Inserting item...");

	// -Checks if any of the fields are empty.-
	if (isEmpty(inputID, inputName, inputQuantity)) {
		return console.log("Insert failed, input error occurred. (An empty field found)");
	}

	// -Sets local variables equal to their global element values.-
	let localInputID = Number(inputID.value);
	let localInputName = inputName.value;
	let localInputQuantity = Number(inputQuantity.value);
	let inputValues = [localInputID, localInputName, localInputQuantity];

	// -Checks if the ID provided is unique.-
	if (idStorage.includes(localInputID)) {
		alert("ID already exists!");
		return console.log("Insert failed, input error occurred. (Duplicate ID)");
	} else {
		idStorage.push(localInputID);
	}

	// -Updates DOM, adding a new row.-
	console.log("Updating DOM...");
	let newRow = document.createElement("tr");
	newRow.setAttribute("id", `item${localInputID}`);
	for (let i = 0; i < 3; i++) {
		let newCell = document.createElement("td");
		newCell.textContent = inputValues[i];
		newRow.append(newCell);
	}
	storage.append(newRow);
	console.log("DOM updated.");

	// -Updates localStorage.-
	console.log("Updating localStorage...");
	localDatabase.push({
		id: localInputID,
		name: localInputName,
		quantity: localInputQuantity,
	});
	updateDatabase();
	console.log("localStorage successfully updated.");

	console.log(
		`Item inserted: Product ID: ${localInputID}, Product Name: "${localInputName}", Quantity: ${localInputQuantity}\n--------------------------------------`
	);
});

// --Adds an Event Listener to edit an existing item.--
editItem.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("Editing an item...");

	// -Checks if the ID field is empty.-
	if (isEmpty(inputID)) {
		return console.log("Edit failed, input error occurred. (An empty field found)");
	}

	// -Sets local variables equal to their global element values.-
	let localInputID = Number(inputID.value);
	let localInputName = inputName.value;
	let localInputQuantity = Number(inputQuantity.value);

	// -Updates item's new value & refreshes DOM.-
	let databaseUpdateRow = document.getElementById(`item${localInputID}`);
	let shopUpdateRow = document.getElementById(`shopItem${localInputID}`);
	console.log("Setting new values & updating DOM...");
	// Checks if ID exists
	if (idStorage.includes(localInputID)) {
		for (let item in localDatabase) {
			if (localDatabase[item].id == localInputID) {
				if (localInputName != "") {
					console.log("Updating item name...");
					localDatabase[item].name = localInputName;
					databaseUpdateRow.childNodes[1].textContent = localInputName;
					if (shopUpdateRow != null) {
						shopUpdateRow.childNodes[1].textContent = localInputName;
					}
				}
				if (localInputQuantity != 0) {
					console.log("Updating item quantity...");
					localDatabase[item].quantity = localInputQuantity;
					databaseUpdateRow.childNodes[2].textContent = localInputQuantity;
					if (shopUpdateRow != null) {
						shopUpdateRow.childNodes[2].textContent = localInputQuantity;
					}
				}
			}
		}
	} else {
		alert("Item ID not found.");
		return console.log("Edit failed, input error occurred. (ID was not found.)");
	}

	updateDatabase();
	console.log(`Item edited successfully.\n--------------------------------------`);
});

// --Adds an Event Listener to remove an existing item.--
deleteItem.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("Deleting an item...");

	// -Checks if the ID field is empty.-
	if (isEmpty(inputID)) {
		return console.log("Edit failed, input error occurred. (An empty field found)");
	}

	// -Sets local variables equal to their global element values.-
	let localInputID = Number(inputID.value);

	// -Removes the item & refreshes DOM.-
	let databaseUpdateRow = document.getElementById(`item${localInputID}`);
	let shopUpdateRow = document.getElementById(`shopItem${localInputID}`);
	console.log("Setting new values & updating DOM...");
	// Checks if ID exists
	if (idStorage.includes(localInputID)) {
		for (let item in localDatabase) {
			if (localDatabase[item].id == localInputID) {
				localDatabase.splice(localDatabase.indexOf(item), 1);
				databaseUpdateRow.remove();
				if (shopUpdateRow != null) {
					console.log("Removing from cart...");
					shopUpdateRow.remove();
				}
			}
		}
	} else {
		alert("Item ID not found.");
		return console.log("Removal failed, input error occurred. (ID was not found.)");
	}

	updateDatabase();
	idStorage.splice(idStorage.indexOf(localInputID), 1);

	console.log("Item successfully removed.\n--------------------------------------");
});

addToCart.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("Adding item to cart...");

	// -Sets local variables equal to their global element values.-
	let localCartSelect = Number(cartSelect.value);
	let itemValues = [];

	// Fetches item values.
	for (let item in localDatabase) {
		if (localDatabase[item].id == localCartSelect) {
			let success = localDatabase[item];
			itemValues = [localCartSelect, success.name, success.quantity];
		}
	}

	// -Checks if ID exists, then updates DOM.-
	if (idStorage.includes(localCartSelect) && !cartIdStorage.includes(localCartSelect)) {
		console.log("Updating DOM...");
		let newRow = document.createElement("tr");
		newRow.setAttribute("id", `shopItem${localCartSelect}`);
		for (let i = 0; i < 3; i++) {
			let newCell = document.createElement("td");
			newCell.textContent = itemValues[i];
			newRow.append(newCell);
		}
		cart.append(newRow);
		cartIdStorage.push(localCartSelect);
	} else {
		alert("Item ID not found or item is already in cart.");
		return console.log(
			"Selection failed, input error occurred. (ID was not found or is already in cart.)"
		);
	}
});

// _-Function that runs on startup.-_
function startup() {
	console.log("Starting up...");
	localDatabase = JSON.parse(database);

	// -Sets local variables equal to their global element values.-
	let itemValues = [];

	for (let item in localDatabase) {
		let update = localDatabase[item]; // Shorthand
		// Updates unique ID storage.
		idStorage.push(update.id);
		// Fetches item values.
		itemValues = [update.id, update.name, update.quantity];

		// Updates DOM, adding a row for each item.
		console.log("Updating DOM...");
		let newRow = document.createElement("tr");
		newRow.setAttribute("id", `item${localDatabase[item].id}`);
		for (let i = 0; i < 3; i++) {
			let newCell = document.createElement("td");
			newCell.textContent = itemValues[i];
			newRow.append(newCell);
		}
		storage.append(newRow);
		console.log("DOM updated.");
	}
	console.log("Startup complete.");
}
startup();

// _-Function that checks if given element values are empty. Returns true or nothing.-_
function isEmpty(...element) {
	for (let i = 0; i < element.length; i++) {
		if (element[i].value == "") {
			alert(`${element[i].id.toUpperCase()} cannot be empty!`);
			return true;
		}
	}
}

// _-Function that updates the database.-_
function updateDatabase() {
	localStorage.setItem("items", JSON.stringify(localDatabase));
}
