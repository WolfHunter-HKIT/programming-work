let hearts = document.getElementsByClassName("heart");
let heartsStorage = [];

function fetchLocalStorage() {
	if (localStorage.getItem("favorites") != null) {
		heartsStorage = localStorage.getItem("favorites");
		heartsStorage = JSON.parse(heartsStorage);
		console.log("Fetched", heartsStorage);
	}
}
fetchLocalStorage();

for (let i = 0; i < hearts.length; i++) {
	let id = hearts[i].getAttribute("id");
	// Checks if there were any favorited images.
	if (heartsStorage.includes(id)) {
		hearts[i].classList.toggle("colored");
	}
	// Adds an event listener to each heart
	hearts[i].addEventListener("click", () => {
		let id = hearts[i].getAttribute("id");
		fetchLocalStorage();
		// Checks if the heart was favorited
		if (heartsStorage.includes(id)) {
			hearts[i].classList.toggle("colored");
			heartsStorage.splice(heartsStorage.indexOf(id), 1);
			console.log(`Unavorited ${id}`);
		}
		// Checks if the heart was not favorited
		else {
			hearts[i].classList.toggle("colored");
			heartsStorage.push(id);
			console.log(`Favorited ${id}`);
		}
		console.log(heartsStorage);
		localStorage.setItem("favorites", JSON.stringify(heartsStorage));
	});
}
