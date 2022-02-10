import { Utils } from "./utils.js";
const FACE_DOWN = 0;
const FACE_UP = 3;
const FACE_LEFT = 6;
const FACE_RIGHT = 9;
class MovingObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [240, 160];
    this.canvas = document.getElementById('game-box');
    this.currDir = FACE_DOWN;
  }

  draw(frameX) {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log(frameX)
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

      requestAnimationFrame(() => drawFrame(frameX));
    };
  }

  convertKeytoDir(code) {
    switch (code) {
      case "KeyS":
      case "ArrowDown":
        this.currDir = FACE_DOWN;
        return [0, 1];

      case "KeyW":
      case "ArrowUp":
        this.currDir = FACE_UP;
        return [0, -1];

      case "KeyA":
      case "ArrowLeft":
        this.currDir = FACE_LEFT;
        return [-1, 0];

      case "KeyD":
      case "ArrowRight":
        this.currDir = FACE_RIGHT;
        return [1, 0];
    }
  }

  move(dir, view) {
    let dx = 16 * dir[0];
    let dy = 16 * dir[1];
    if (!Utils.detectCollision(view, [this.pos[0] + dx, this.pos[1] + dy])) {
      
      this.pos[0] += dx;
      this.pos[1] += dy;
      this.draw(this.currDir);

    }
      

      
    
  }
}

export default MovingObject;
