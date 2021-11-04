
import StaticObject from "./static_object.js";
import { Utils } from "./utils.js";
class View {
  constructor(canvas, ctx, player) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = player;
    this.objs = [];
    this.addObjects();
    this.draw();
    // window.requestAnimationFrame(this.draw);
    // this.player.draw(ctx);
    
  }

  addObjects() {
    let i = 0;
    while (this.objs.length < Utils.levels[1].objects.length) {
      this.objs.push(new StaticObject(Utils.levels[1].objects[i]));
      i++;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'brown'
    this.ctx.fillRect(5, 5, this.canvas.width - 11, this.canvas.height - 11);
    this.player.draw(this.ctx);

    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].draw(this.ctx);  
    }
    requestAnimationFrame(() =>{
      this.draw();
    });
  }

  
}

export default View;