class MovingObject {
  constructor(attributes) {
    this.pos = attributes['pos'];
    this.radius = attributes['radius'];
  }

  draw(ctx) {
   
    let circle = new Path2D();
    
    ctx.beginPath();
    circle.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'green';
    ctx.fill(circle);
    
  }

  convertKeytoDir(code) {
    switch (code) {
      case "KeyS":
      case "ArrowDown":
        return [0, 1];
     
      case "KeyW":
      case "ArrowUp":
        return [0, -1];
      
      case "KeyA":
      case "ArrowLeft":
        return [-1, 0];

      case "KeyD":
      case "ArrowRight":
        return [1, 0];
    
    }
  }

  move(dir, canvas) {
    let dx = this.radius/2 * dir[0];
    let dy = this.radius/2 * dir[1];
    if(this.pos[0] + dx < canvas.width - this.radius && this.pos[0] + dx > this.radius && this.pos[1] + dy < canvas.height - this.radius && this.pos[1] + dy > this.radius) {
      this.pos[0] += dx;
      this.pos[1] += dy;
    }
   
  }
}

export default MovingObject;