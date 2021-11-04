class StaticObject {
  constructor(attributes) {
    this.pos = attributes['pos'];
    this.width = attributes['width'];
    this.height = attributes['height'];
    this.color = attributes['color'];
    this.message = attributes['message'];
    this.item = attributes['item'];
  }

  draw(ctx) {
    let rectangle = new Path2D();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }

  
}

export default StaticObject;