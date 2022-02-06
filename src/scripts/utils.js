export const Utils = {
  detectCollision: (view, pos) => {
    let updated = [pos[0]/16, pos[1]/16];
    let index = (47 * updated[1]) + updated[0]
    const objs = [0, 78, 79, 80, 228, 229, 244, 245, 230, 231, 246, 247, 216, 217, 218, 232, 233, 234, 248, 249, 250, 219, 220, 221, 235, 236, 237, 251, 252, 253, 142, 143]
    return view.mapLayer1[index] !== 81 || !objs.includes(view.mapLayer2[index])
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