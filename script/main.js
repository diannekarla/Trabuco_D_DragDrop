(() => {
	// make the  connections to the elements on the page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
				puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
				dropZones = document.querySelectorAll(".drop-zone"),
				theGameBoard = document.querySelector(".puzzle-board");

	// thebuttons becomes this:
	// [
	// <img src="images/buttonZero.jpg" data-bgref="0" alt="thumbnail">
	// <img src="images/buttonOne.jpg" data-bgref="1" alt="thumbnail">
	// <img src="images/buttonTwo.jpg" data-bgref="2" alt="thumbnail">
	// <img src="images/buttonThree.jpg" data-bgref="3" alt="thumbnail">
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

		function startDrag(event){
			console.log("started dragging");
		}

		function draggedOver(event){
			event.preventDefault();
			console.log("dragged me over");
		}

		function handleDrop(event){
			event.preventDefault();
			console.log("dropped on me");
		}

		// these are the "triggers" we want to use to fire off events
		theButtons.forEach(button => button.addEventListener("click", changeBgImg));

		puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
		dropZones.forEach(zone => {
			zone.addEventListener("dragover", draggedOver);
			zone.addEventListener("drop", handleDrop);
		});

})();
