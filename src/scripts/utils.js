export const Utils = {
  detectCollision: (obj1, obj2) => {
    var distX = Math.abs(obj1.pos[0] - obj2.pos[0]-obj2.width/2);
    var distY = Math.abs(obj1.pos[1] - obj2.pos[1]-obj2.height/2);

    if (distX > (obj2.width/2 + obj1.radius)) { return false; }
    if (distY > (obj2.height/2 + obj1.radius)) { return false; }
    if (distX <= (obj2.width/2)) { return true; } 
    if (distY <= (obj2.height/2)) { return true; }
    var dx=distX-obj2.width/2;
    var dy=distY-obj2.height/2;
    return (dx*dx+dy*dy<=(obj1.radius*obj1.radius));
  },
  levels: {
    1:[{pos: [67, 97], width: 200, height: 40, color: 'pink', message: "This is a big shelf."},
     {pos: [300, 6], width: 80, height: 120, color: 'pink', message: "Oohhh Big Brain!"},
     {pos: [5, 386], width: 200, height: 57, color: 'pink', message: "Kill the bits"}
    ] 
  },
  renderMessage: (objMessage) => {
    let message = document.getElementById('message');
    let content = objMessage;
    message.innerHTML = content;
    setTimeout(()=>{
      message.innerHTML = "Use the WSAD or arrow keys to move!"
    }, 4000);
    
  } 
};