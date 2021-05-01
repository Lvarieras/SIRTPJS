

Form.prototype.paint = function(ctx){
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.epaisseur; 
}

Rectangle.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    ctx.beginPath();
    ctx.rect(this.initialCoordinateX, this.initialCoordinateY, this.finalCoordinateX, this.finalCoordinateY);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    ctx.beginPath();
    ctx.moveTo(this.initialCoordinateX, this.initialCoordinateY);
    ctx.lineTo(this.finalCoordinateX, this.finalCoordinateX);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {

      eltDuTableau.paint(ctx);
    });
  };
