import MovingObject from "./scripts/moving_object";

import View from "./scripts/view";
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-box");
  let ctx = canvas.getContext("2d");
  let testPlayer = new MovingObject({pos: [69, 69], radius: 20});
  
  // let background = new Image();
  // background.src = "https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg";

  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  testPlayer.draw(ctx);
  let testView = new View(canvas, ctx, testPlayer);
  
  
  window.addEventListener("keydown", (event) => {
    event.preventDefault();
    testPlayer.move(testPlayer.convertKeytoDir(event.code), canvas);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "gray";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // testPlayer.draw(ctx);
    testView.draw();
  });

  
})