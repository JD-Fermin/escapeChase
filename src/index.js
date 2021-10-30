document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-box");
  let ctx = canvas.getContext("2d");

  let background = new Image();
  background.src = "https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg";

// Make sure the image is loaded first otherwise nothing will draw.
  background.onload = function(){
    ctx.drawImage(background,0,0);   
  }
})