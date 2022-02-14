
class StaticObject {
  constructor(attributes) {
    this.tiles = attributes['tiles'];
    this.pos = attributes['pos']
    this.message = attributes['message'];
    this.playerFace = attributes['playerFace'];
  }

  detectPlayer(player) {
    let updated = [player.pos[0] / 16, player.pos[1] / 16];
    let index = 47 * updated[1] + updated[0];

    for (let i = 0; i < this.pos.length; i++) {
      const tile = this.pos[i];
      let top = tile - 47 >= 0 ? tile - 47 : null;
      let bottom = tile + 47 < 1128 ? tile + 47 : null;
      let left = tile % 47 !== 0 ? tile - 1 : null;
      let right = (tile + 1) % 47 !== 0 ? tile + 1 : null;
      if (index === top || index === bottom || index === left || index === right) {
        return true;
      }
    }
    return false;
  }

  renderMessage() {
    let message = document.getElementById('message');
    message.innerHTML = "";
    let content = this.message.split("");
    let animate = () => {
      let running = setTimeout(animate, 90)
      content.length > 0 ? message.innerHTML += content.shift() : clearTimeout(running)
    }
    animate();
    setTimeout(()=>{
      message.innerHTML = "Use the WSAD or arrow keys to move and E to interact!"
    }, 3500);
  }
}

export default StaticObject;