import MovingObject from "./scripts/moving_object";
window.MovingObject = MovingObject;
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-box");
  let ctx = canvas.getContext("2d");

  // let background = new Image();
  // background.src = "https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg";

  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let testPlayer = new MovingObject({pos: [69, 69], radius: 20});
  testPlayer.draw(ctx);
  
  
})