import MovingObject from "./scripts/moving_object";
import { Utils } from "./scripts/utils";
import View from "./scripts/view";
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-box");
  let ctx = canvas.getContext("2d");
  let testPlayer = new MovingObject({pos: [69, 69], radius: 20});
  let paused = false;
  
  // let background = new Image();
  // background.src = "https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg";

  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  testPlayer.draw(ctx);
  let testView = new View(canvas, ctx, testPlayer);
  let flag = false;

  let reset = document.getElementById('reset');
  reset.onclick = (e) => {
    e.preventDefault();
    location.reload();
  };

  let pause = document.getElementById('pause');
  pause.onclick = (e) => {
    e.preventDefault();
    paused = true;
    alert('You paused the game!');
    
  };

  let resume = document.getElementById('resume');
  resume.onclick = (e) => {
    e.preventDefault();
    if (paused) {
      alert('You resumed the game!');
      paused = false;
    } 
    
  };
  
  window.addEventListener("keydown", (event) => {
   
    event.preventDefault();
    if (paused) return;
    if (event.code === 'KeyE' && testPlayer.collided) {
      flag = true;
      Utils.renderMessage(testPlayer.victim);
      if(!testPlayer.items.includes(testPlayer.victim.item)){
        testPlayer.items.push(testPlayer.victim.item);
        if (Utils.levels[1].itemOrder[testPlayer.items.length - 1] !== testPlayer.items[testPlayer.items.length - 1]) {
          testPlayer.items.pop();
          let temp = testPlayer.victim.message;
          testPlayer.victim.message = testPlayer.victim.item === 'success' ? "You need something else to open the door!" : 'You need something else to get this item!';
          Utils.renderMessage(testPlayer.victim);
          testPlayer.victim.message = temp;
        } else {
          testPlayer.victim.message = "There's nothing here....";
        }
          
        
        
      } 
      console.log(testPlayer.items);
      if(testPlayer.items[testPlayer.items.length - 1] === 'success'){
        Utils.renderMessage(testPlayer.victim);
        alert('You escaped!');
        location.reload();
      }

      setTimeout(() => {
        flag = false
      }, 4000);
    }
    
    if (flag === false){
      testPlayer.move(testPlayer.convertKeytoDir(event.code), testView, true);
      console.log(testPlayer.collided, testPlayer.victim);
      testView.draw();
    }
    
    
  });

  
  
})
