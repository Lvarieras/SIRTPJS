
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.listForm = new Array();
    this.getForms = function() {
        return this.listForm;
      }.bind(this) ;
    // this.addForms = function(form){
    //     this.listForm.push(form)
    // }.bind(this);
    
};

function Form(thick,color){
    this.thick = thick;
    this.color = color;
}

function Rectangle(thick,color,initialCoordinateX,initialCoordinateY,finalCoordinateX,finalCoordinateY){
    Form.call(this,thick,color);
    this.initialCoordinateX = initialCoordinateX;
    this.initialCoordinateY = initialCoordinateY;
    this.finalCoordinateX = finalCoordinateX;
    this.finalCoordinateY = finalCoordinateY;

};

function Line(thick,color,initialCoordinateX,initialCoordinateY,finalCoordinateX,finalCoordinateY){
    Form.call(this,thick,color);
    this.initialCoordinateX = initialCoordinateX;
    this.initialCoordinateY = initialCoordinateY;
    this.finalCoordinateX = finalCoordinateX;
    this.finalCoordinateY = finalCoordinateY;
};