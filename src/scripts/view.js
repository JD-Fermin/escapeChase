import StaticObject from "./static_object.js";
class View {
  constructor(canvas, ctx, player) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = player;
    this.objs = [];
    this.addObjects(5);
    this.draw();
    // this.player.draw(ctx);
  }

  addObjects(amt) {
    while (this.objs.length < amt) {
      this.objs.push(new StaticObject({pos: [Math.random()*this.canvas.width - 40, Math.random() *this.canvas.height - 40], width: 40, height: 40, color: 'brown'}))
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);

    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].draw(this.ctx);  
    }
    
  }
}

export default View;