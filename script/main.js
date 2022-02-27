(() => {
	// make the  connections to the elements on the page
	// that we want the user to interact with
	let theButtons = document.querySelectorAll("#buttonHolder img"),
				puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
				dropZones = document.querySelectorAll(".drop-zone"),
				theGameBoard = document.querySelector(".puzzle-board");

	const piecePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];


	// thebuttons becomes this:
	// [
	// <img src="images/buttonZero.jpg" data-bgref="0" alt="thumbnail">
	// <img src="images/buttonOne.jpg" data-bgref="1" alt="thumbnail">
	// <img src="images/buttonTwo.jpg" data-bgref="2" alt="thumbnail">
	// <img src="images/buttonThree.jpg" data-bgref="3" alt="thumbnail">
	// ]
		function resetPuzzlePieces(){

		}

		function changeImageSet() {
			// debugger;//pause our code for execution at this point
			// let key = this.dataset.bgref;s
			// console.log(key);

			// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
				theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
			// `` means this is a javascript template string. You can use it to write a bit of
			// inline javascript which will be interpreted at runtime
			// search for MDN Javascript Template String

				piecePaths.forEach((piece, index) => {
					puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`
				})
		}

		function startDrag(event){
			// console.log("started dragging");
			// save a reference to the element we're dragging
			event.dataTransfer.setData("draggedElement", event.target.id);
		}

		function draggedOver(event){
			// event is the user event(a click, a drag, a drop)
			// some elements have default behaviour (like an anchor tag) -> we need to block the behaviour
			// and script our own
			// that's what event.preventDefault() does -> override the default behaviour (block it)

			let boardTarget = event.target;
			let currentEl = event.dataTransfer.getData("draggedElement");

			if(boardTarget.tagName == 'IMG'){ //on top of image already
					return;
			}else{
				if(boardTarget.classList.contains(`${currentEl}`) == false){
					return;
				}
			}
			event.preventDefault();

		}

		function handleDrop(event){
			event.preventDefault();
			// console.log("dropped on me");
			let currentEl = event.dataTransfer.getData("draggedElement");
			console.log(`dropped this element:` , currentEl);

			this.appendChild(document.querySelector(`#${currentEl}`));
		}

		// these are the "triggers" we want to use to fire off events
		theButtons.forEach(button => button.addEventListener("click", changeImageSet));

		puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
		dropZones.forEach(zone => {
			zone.addEventListener("dragover", draggedOver);
			zone.addEventListener("drop", handleDrop);

		});

})();
