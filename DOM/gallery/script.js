let hearts = document.getElementsByClassName("heart");

for (let i = 0; i < hearts.length; i++) {
	// Checks if there were any favorited images.
	if (localStorage.getItem(hearts[i].getAttribute("id")) != null) {
		hearts[i].classList.toggle("colored");
	}
	// Adds an event listener to each heart
	hearts[i].addEventListener("click", () => {
		// Checks if the heart was not favorited
		if (localStorage.getItem(hearts[i].getAttribute("id")) == null) {
			hearts[i].classList.toggle("colored");
			localStorage.setItem(hearts[i].getAttribute("id"), "favorite");
			console.log(`Favorited ${hearts[i].getAttribute("id")}`);
		}
		// Checks if the heart was favorited
		else {
			hearts[i].classList.toggle("colored");
			localStorage.removeItem(hearts[i].getAttribute("id"));
			console.log(`Unfavorited ${hearts[i].getAttribute("id")}`);
		}
	});
}