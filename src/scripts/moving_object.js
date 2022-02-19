import { Utils } from "./utils.js";
const FACE_DOWN = 0;
const FACE_UP = 4;
const FACE_LEFT = 8;
const FACE_RIGHT = 12;

class MovingObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [240, 160];
    this.canvas = document.getElementById("player-box");
    this.currDir = FACE_DOWN;
    this.prevDir = FACE_DOWN;
    this.currStep = 'left';
    this.hasKey = false;
  }

  draw(frameX) {
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

      drawFrame(frameX);
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
    if (this.currDir !== this.prevDir) {
      this.prevDir = this.currDir;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw(this.currDir);
      return;
    }
    if (!Utils.detectCollision(view, [this.pos[0] + dx, this.pos[1] + dy])) {
      
      this.pos[0] += dx / 2;
      this.pos[1] += dy / 2;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let step = this.currStep === 'left' ? this.currDir + 1 : this.currDir + 3
      this.currStep = this.currStep === 'left' ? 'right' : 'left';
      this.draw(step);
      
      setTimeout(() => {
        this.pos[0] += dx / 2;
        this.pos[1] += dy / 2;
        // console.log('after', this.pos)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw(this.currDir);
      }, 90);

      
    }

  
  }

}

export default MovingObject;
