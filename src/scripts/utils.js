export const Utils = {
  detectCollision: (view, player) => {
    
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