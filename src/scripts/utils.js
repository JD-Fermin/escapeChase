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
  } 
};