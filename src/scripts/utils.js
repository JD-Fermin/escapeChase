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
    1: {objects: [{pos: [5, 97], width: 40, height: 200, color: 'pink', message: 'You found a screwdriver!', item: 'screwdriver'},
     {pos: [300, 6], width: 80, height: 120, color: 'pink', message: "You found a crowbar!", item: 'crowbar'},
     {pos: [5, 386], width: 200, height: 57, color: 'pink', 
     message:'You found a key!', item: 'key'},
     {pos: [385, 432], width: 57, height: 10, color: 'orange', message: "Open thy Door of Destiny!", item: 'success'}
    ], itemOrder: ['crowbar', 'screwdriver', 'key', 'success']} 
  },
  renderMessage: (obj) => {
    let message = document.getElementById('message');
    
    let content = obj.message;
    message.innerHTML = content;
    setTimeout(()=>{
      message.innerHTML = "Use the WSAD or arrow keys to move and E to interact!"
    }, 4000);
    
  }
  
  
};
// ['crowbar', 'screwdriver', 'key', 'success']