
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

  //Q1
  this.initialCoordinateX = 0;
  this.initialCoordinateY = 0;
  this.finalCoordinateX = 0;
  this.finalCoordinateY = 0;
  this.onClick = false;


  //Q2 3 types d'évenements : on a le click (on et off) et le déplacement

  this.clickOn = function(evt){
    this.onClick = true;
    var MousePosition = getMousePosition(canvas,evt);
    this.initialCoordinateX = MousePosition.x;
    this.initialCoordinateY = MousePosition.y;
    interactor.onInteractionStart(this);

  }.bind(this);

  this.clickOff = function(evt){
    this.onClick = false;
    var MousePosition = getMousePosition(canvas,evt);
    this.finalCoordinateX = MousePosition.x;
    this.finalCoordinateY =  MousePosition.y;
    interactor.onInteractionEnd(this);

  }.bind(this);

  this.moove = function(evt){
    var MousePosition = getMousePosition(canvas,evt);
    if(!this.onClick){
      return;
    }
    this.finalCoordinateX = MousePosition.x;
    this.finalCoordinateY = MousePosition.y;
    interactor.onInteractionUpdate(this);
  }.bind(this);


  //Q4

  canvas.addEventListener('mousedown', this.clickOn, false);
  canvas.addEventListener('mouseup',this.clickOff, false);
  canvas.addEventListener('mousemoove', this.moove, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



