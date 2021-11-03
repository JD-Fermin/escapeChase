import { Utils } from "./utils.js";
class MovingObject {
  constructor(attributes) {
    this.pos = attributes['pos'];
    this.radius = attributes['radius'];
    this.collided = false;
    this.victim = null;
  }

  draw(ctx) {
   
    let circle = new Path2D();
    
    ctx.beginPath();
    circle.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'green';
    ctx.fill(circle);
    // let image = new Image();
    // image.onload = () => {
    //   ctx.drawImage(image, this.pos[0], this.pos[1], this.radius, this.radius)
    // }
    // image.src = 'src/knight_f_idle_anim_f1.png'
    
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

  move(dir, view) {
    let dx = this.radius/2 * dir[0];
    let dy = this.radius/2 * dir[1];
    
    if(this.pos[0] + dx < view.canvas.width - this.radius && this.pos[0] + dx > this.radius && this.pos[1] + dy < view.canvas.height - this.radius && this.pos[1] + dy > this.radius ) {

      this.pos[0] += dx;
      this.pos[1] += dy;
      for (let i = 0; i < view.objs.length; i++) {
        if (Utils.detectCollision(this, view.objs[i])){
          this.collided = true;
          this.victim = view.objs[i];
          this.pos[0] -= dx;
          this.pos[1] -= dy;
          
          break;
        } else {
          this.collided = false;
          this.victim = null;
        }

      }
    }
   
  }
}

export default MovingObject;