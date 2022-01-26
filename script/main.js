(() => {
	// make the  connections to the elements on the page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
				theGameBoard = document.querySelector(".puzzle-board");

	// thebuttons becomes this:
	// [
	// <img>
	// <img>
	// <img>
	// <img>
	// ]

		function changeBgImg() {
			// debugger;//pause our code for execution at this point
			// let key = this.dataset.bgref;
			// console.log(key);

			// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
				theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
			// `` means this is a javascript template string. You can use it to write a bit of
			// inline javascript which will be interpreted at runtime
			// search for MDN Javascript Template String
		}

		// these are the "triggers" we want to use to fire off events
		theButtons.forEach(button => button.addEventListener("click", changeBgImg));


})();
