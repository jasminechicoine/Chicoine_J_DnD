// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	// collect ALL of the draggable pieces in the drag zone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	// collect ALL of the drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	// set up a global variable to store a reference to the dragged piece
	// i need to know this later when i drop it on a zone
	draggedPiece;

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {	
	// change the background image in the drop zone
	// the `${}` is called a JavaScript Template String - whatever is inside the curly
	// braces is evaluated at runtime and interpolated (replaces the bracket notation)

	// you can use variables, functions, etc inline in your code this way
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	// store the element I am currently dragging in that global draggedPiece variable
	draggedPiece = this;
}

function handleDragOver(e) { e.preventDefault(); }

function handleDrop(e) {
	// block the default behaviour 
	e.preventDefault();
	// and then do whatever you want.
	console.log('dropped on me!');
	e.target.appendChild(draggedPiece);
}

// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));
// add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add the dragover handling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) { // e is shorthand for event -> in this case the nav event
	// don't let the default behaviour of certain elements happen - block it
	e.preventDefault();
}

// temp handling
tempLink.addEventListener('click', blockDefaultBehaviour);