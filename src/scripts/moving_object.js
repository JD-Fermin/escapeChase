import { Utils } from "./utils.js";
class MovingObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [240, 160];
    this.canvas = document.getElementById('game-box');

  }

  draw() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let char = new Image();
    char.src = "./assets/spritesheet.png";
    char.onload = () => {
      const scale = 1;
      const width = 16;
      const height = 16;
      const scaledWidth = scale * width;
      const scaledHeight = scale * height;

      let drawFrame = (frameX) => {
        this.ctx.drawImage(
          char,
          frameX * width,
          0,
          width,
          height,
          this.pos[0],
          this.pos[1],
          scaledWidth,
          scaledHeight
        );
      };

      drawFrame(0);
    };
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
    let dx = 16 * dir[0];
    let dy = 16 * dir[1];
    if (!Utils.detectCollision(view, [this.pos[0] + dx, this.pos[1] + dy])) {
      this.pos[0] += dx;
      this.pos[1] += dy;

    }
      

      
    
  }
}

export default MovingObject;
