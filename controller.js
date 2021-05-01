var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;
    this.ctx = ctx;
    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.widgetShapeRect = function(event) {
		this.currEditingMode = editingMode.rect;
	}

	this.widgetShapeLine = function(event) {
		this.currEditingMode = editingMode.line;
	}

	this.widgetSpinnerWidth = function(event) {
		this.currLineWidth = event.target.value;
	}

	this.widgetColour = function(event) {
		this.currColour = event.target.value;
	}

	document.getElementById("butRect").addEventListener('change', this.widgetShapeRect.bind(this), false);
	document.getElementById("butLine").addEventListener('change', this.widgetShapeLine.bind(this), false);
	document.getElementById("spinnerWidth").addEventListener('change', this.widgetSpinnerWidth.bind(this), false);
	document.getElementById("colour").addEventListener('change', this.widgetColour.bind(this), false);


    new DnD(canvas, this);

    this.onInteractionStart = function(dnd){
		if(this.currEditingMode == 0){
			this.currentShape  = new Rectangle(this.currLineWidth,this.currColour, dnd.initialCoordinateX,dnd.initialCoordinateY,1,1);
		}
		else {
			this.currentShape  = new Line(this.currLineWidth,this.currColour,dnd.initialCoordinateX,dnd.initialCoordinateY,dnd.initialCoordinateX+1,dnd.initialCoordinateX);
		}
    }.bind(this);


    this.onInteractionUpdate = function(dnd) {
		if(this.currEditingMode == 0){
			this.currentShape = new Rectangle(this.currLineWidth,this.currColour,dnd.initialCoordinateX,initialCoordinateY,dnd.finalCoordinateY-dnd.initialCoordinateY,dnd.finalCoordinateY-initialCoordinateX);
		}
		else {
			this.currentShape = new line(this.currLineWidth,this.currColour,dnd.initialCoordinateX,dnd.initialCoordinateY,dnd.finalCoordinateX,dnd.finalCoordinateY);
		}
		drawing.paint(ctx);
    }.bind(this)

    this.onInteractionEnd = function(dnd) {
		if(this.currEditingMode == 0){
			this.currentShape = new Rectangle(this.currLineWidth,this.currColour,dnd.initialCoordinateX,dnd.initialCoordinateY,dnd.finalCoordinateY-dnd.initialCoordinateY, dnd.finalCoordinateX-dnd.initialCoordinateX)
		}
		else {
			this.currentShape = new Line(this.currLineWidth,this.currColour,dnd.initialCoordinateX,dnd.initialCoordinateY,dnd.finalCoordinateX,dnd.finalCoordinateY)
		}
		drawing.addForms(this.currentShape);
		drawing.paint(ctx);
    }.bind(this)
    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};