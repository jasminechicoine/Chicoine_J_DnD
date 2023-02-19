
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	mainBoard = document.querySelector('.puzzle-pieces'),

	draggedPiece = null;


function changeBGImage() {	
	
	
	dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
	  });
	  puzzlePieces.forEach(piece => {
        piece.classList.remove("dropped");
        mainBoard.appendChild(piece);
		
	  });
	
	  // Move the puzzle pieces back to the original div
	  let puzzlePiecesDiv = document.querySelector(".puzzle-pieces");
	  puzzlePieces.forEach(piece => {
		if (piece.parentNode.classList.contains("puzzle-board")) {
		  puzzlePiecesDiv.appendChild(piece);
		  console.log('you have reset the pieces!'); 
		}
	  });


	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	
	
}

function handleStartDrag() { 
	// store the element I am currently dragging in that global draggedPiece variable
	console.log('started dragging this piece:', this);

	draggedPiece = this;
}

function handleDragOver(e) 
{ event.preventDefault(); 

	if (this.children.length === 0) {
		this.appendChild(draggedPiece);
	}
	console.log('dragged over me');
}

function handleDrop(e) {
	// block the default behaviour 
	e.preventDefault();
	// and then do whatever you want.
	console.log('dropped piece!');

	if (this.childNodes.length > 0) {
		console.log('Oh no! This drop zone is already occupied!');
		return false;
	  }
	
	  this.appendChild(draggedPiece);
}

// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
theButtons.forEach(button => button.addEventListener('click', changeBGImage));
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