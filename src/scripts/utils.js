
export const Utils = {
  detectCollision: (view, pos) => {
    let updated = [pos[0] / 16, pos[1] / 16];
    let index = 47 * updated[1] + updated[0];
    const objs = [
      0, 78, 79, 80, 228, 229, 244, 245, 230, 231, 246, 247, 216, 217, 218, 232,
      233, 234, 248, 249, 250, 219, 220, 221, 235, 236, 237, 251, 252, 253, 142,
      143
    ];
    return (
      view.mapLayer1[index] !== 81 || !objs.includes(view.mapLayer2[index])
    );
  },

  detectPlayerObjectInteraction: (objsArr, player) => {
    for (let i = 0; i < objsArr.length; i++) {
      const obj = objsArr[i];
      if (obj.detectPlayer(player)) return obj;
    }

    return null;
  },

  renderMessage: (str) => {
    let message = document.getElementById("message");
    document.getElementById("main-text").style.display = "block";
    message.innerHTML = "";
    let content = str.split("");
    let animate = () => {
      let running = setTimeout(animate, 90);
      content.length > 0
        ? (message.innerHTML += content.shift())
        : clearTimeout(running);
    };
    animate();
    setTimeout(() => {
      message.innerHTML = "";
      document.getElementById("main-text").style.display = "none";
    }, (content.length / 3500) * 100 * 3500 + 1000);
  },

  findAllIndices: (arr, eleArr) => {
    let indices = {};
    for (let i = 0; i < eleArr.length; i++) {
      const ele = eleArr[i];
      for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        if (element === ele && indices[ele] === undefined) {
          indices[ele] = [j];
        } else if (element === ele && indices[ele] !== undefined) {
          indices[ele].push(j);
        }
      }
    }
   
    return indices;
  }
};

