import MovingObject from "./scripts/moving_object";
import StaticObject from "./scripts/static_object";
import { Utils } from "./scripts/utils";
import View from "./scripts/view";
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-box");
  let canvas2 = document.getElementById("game-box-2");
  let playerCanvas = document.getElementById("player-box");
  let ctx = canvas.getContext("2d");
  let ctx2 = canvas2.getContext("2d");
  let playerctx = playerCanvas.getContext("2d");
  let testPlayer = new MovingObject(playerctx);
  let paused = false;

  let testView = new View(ctx2, ctx, testPlayer);
  let flag = false;
  let objects = [
    {
      tiles: [190, 206],
      message: "This is a cabinet.",
      pos: [568, 615],
      playerFace: [3]
    },
    {
      tiles: [192, 208],
      message: "This is another cabinet.",
      pos: [569, 616],
      playerFace: [3]
    },
    {
      tiles: [84],
      message: "This is a trash can.",
      pos: [897],
      playerFace: [0, 6]
    },
    {
      tiles: [225, 241],
      message: "This is a toilet with a turd.",
      pos: [372, 419],
      playerFace: [3]
    },
    {
      tiles: [15, 16, 31, 32, 47, 48],
      message: "This is a bed.",
      pos: [302, 303, 349, 350, 396, 397],
      playerFace: [3,9]
    },
    {
      tiles: [15, 16, 31, 32, 47, 48],
      message: "This is a bed.",
      pos: [317, 318, 364, 365, 411, 412],
      playerFace: [3,9]

    },
    {
      tiles: [94, 95, 110, 111, 126, 127],
      message: "This is a bookshelf",
      pos: [219, 220, 266, 267, 313, 314],
      playerFace: [3]

    },
    {
      tiles: [94, 95, 110, 111, 126, 127],
      message: "This is a bookshelf",
      pos: [248, 249, 295, 296, 342, 343],
      playerFace: [3]

    },
    {
      tiles: [156, 157, 172, 173],
      message: "This is a fridge.",
      pos: [573, 574, 620, 621],
      playerFace: [3]

    },
    {
      tiles: [226, 227, 242, 243],
      message: "The sink seems to be out.",
      pos: [369, 370, 416, 417],
      playerFace: [3]

    },
    {
      tiles: [163, 164, 179, 180],
      message: "The TV seems to be displaying something.",
      pos: [310, 311, 357, 358],
      playerFace: [3]

    },
    {
      tiles: [158, 159, 160, 174, 175, 176],
      message: "This sink seems to be working fine...",
      pos: [570, 571, 572, 617, 618, 619],
      playerFace: [3]

    },
  ];

  let updatedObjects = objects.map((object) => {
    return new StaticObject(object);
  });

  let reset = document.getElementById("reset");
  reset.onclick = (e) => {
    e.preventDefault();
    location.reload();
  };

  let pause = document.getElementById("pause");
  pause.onclick = (e) => {
    e.preventDefault();
    paused = true;
    alert("You paused the game!");
  };

  let resume = document.getElementById("resume");
  resume.onclick = (e) => {
    e.preventDefault();
    if (paused) {
      alert("You resumed the game!");
      paused = false;
    }
  };

  // requestAnimationFrame(main);
  // let startTime;
  // let gTime;

  // function main(time) {
  //   if (startTime === undefined) {
  //     startTime = time;
  //   }
  //   gTime = time - startTime;
  //   // ctx.clearRect(0, 0, canvas.width, canvas.height)
  //   testView.draw();

  //   requestAnimationFrame(main);
  // }

  // testView.draw()
  function handleKeyDown(event) {
    event.preventDefault();
    if (paused) return;
    if (
      event.code === "KeyE" &&
      Utils.detectPlayerObjectInteraction(updatedObjects, testPlayer) && Utils.detectPlayerObjectInteraction(updatedObjects, testPlayer).playerFace.includes(testPlayer.currDir)
    ) {
      flag = true;
      window.removeEventListener('keydown', handleKeyDown);
      Utils.detectPlayerObjectInteraction(
        updatedObjects,
        testPlayer
      ).renderMessage();

      setTimeout(() => {
        flag = false;
        window.addEventListener("keydown", handleKeyDown)
      }, 3500);
    }

    if (flag === false) {
      testPlayer.moved = true;
      testPlayer.move(testPlayer.convertKeytoDir(event.code), testView);
      // requestAnimationFrame(() => testView.draw())
    }

  };
  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("keyup", () => testPlayer.moved = false)
});
