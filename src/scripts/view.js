
class View {
  constructor(ctx2, ctx, player) {
    this.ctx2 = ctx2;
    this.ctx = ctx;
    this.player = player;
    this.tileSize = 16;
    this.atlasCol = 16;
    this.atlasRow = 16;
    this.mapCols = 47;
    this.mapRows = 24;
    this.mapHeight = this.tileSize * this.mapRows;
    this.mapWidth = this.tileSize * this.mapCols;
    this.mapLayer1 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 118,
      0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 118, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 97, 103,
      103, 103, 103, 103, 103, 103, 98, 119, 0, 0, 130, 97, 103, 103, 103, 103,
      103, 103, 103, 103, 103, 98, 119, 129, 132, 132, 132, 132, 132, 132, 132,
      118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 104, 102, 102, 102, 102,
      102, 102, 102, 113, 119, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102,
      102, 102, 102, 113, 119, 130, 97, 103, 103, 103, 103, 103, 98, 119, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102, 102,
      113, 119, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102, 102, 102, 102,
      113, 119, 130, 104, 102, 102, 102, 102, 102, 113, 119, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 130, 99, 100, 100, 100, 100, 100, 100, 100, 101, 119, 0,
      0, 130, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 119, 130,
      104, 102, 102, 102, 102, 102, 113, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81,
      81, 81, 81, 81, 81, 81, 81, 81, 119, 130, 99, 100, 100, 100, 100, 100,
      101, 119, 0, 0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 118, 130, 81,
      81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81, 81, 81,
      81, 81, 81, 81, 81, 119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 0,
      130, 97, 103, 103, 103, 103, 103, 98, 119, 130, 81, 81, 81, 81, 81, 81,
      81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,
      119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 0, 130, 104, 102, 102,
      102, 102, 102, 113, 119, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0,
      0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 130, 81, 81, 81,
      81, 81, 81, 81, 119, 0, 0, 0, 130, 104, 102, 102, 102, 102, 102, 113, 119,
      130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81,
      81, 81, 81, 81, 81, 81, 81, 119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0,
      0, 0, 130, 99, 100, 100, 100, 100, 100, 101, 119, 116, 117, 117, 117, 131,
      81, 120, 117, 117, 117, 115, 0, 0, 116, 117, 117, 117, 117, 131, 81, 120,
      117, 117, 117, 117, 115, 116, 117, 117, 131, 81, 120, 117, 117, 115, 0, 0,
      0, 130, 81, 81, 81, 81, 81, 81, 81, 133, 132, 132, 132, 132, 134, 81, 133,
      132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 134, 81, 133, 132,
      132, 132, 132, 132, 132, 132, 132, 134, 81, 133, 132, 132, 118, 0, 0, 0,
      130, 81, 81, 81, 81, 81, 81, 81, 97, 103, 103, 103, 103, 98, 81, 97, 103,
      103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 98, 81, 97, 103, 103,
      103, 103, 103, 103, 103, 103, 98, 81, 97, 103, 98, 119, 0, 0, 0, 130, 81,
      81, 81, 81, 81, 81, 81, 104, 102, 102, 102, 102, 113, 81, 104, 102, 102,
      102, 102, 102, 102, 102, 102, 102, 102, 102, 113, 81, 104, 102, 102, 102,
      102, 102, 102, 102, 102, 113, 81, 104, 102, 113, 119, 0, 0, 0, 130, 81,
      81, 81, 81, 81, 81, 81, 104, 102, 102, 102, 102, 113, 81, 104, 102, 102,
      102, 102, 102, 102, 102, 102, 102, 102, 102, 113, 81, 104, 102, 102, 102,
      102, 102, 102, 102, 102, 113, 81, 104, 102, 113, 119, 0, 0, 0, 130, 81,
      81, 81, 81, 81, 81, 81, 99, 100, 100, 100, 100, 101, 81, 99, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 81, 99, 100, 100, 100,
      100, 100, 100, 100, 100, 101, 81, 99, 100, 101, 119, 0, 0, 0, 130, 81, 81,
      81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,
      81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,
      81, 81, 81, 81, 119, 0, 0, 0, 130, 81, 81, 81, 81, 81, 81, 81, 120, 117,
      117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,
      117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,
      117, 117, 117, 115, 0, 0, 0, 116, 117, 117, 131, 81, 120, 117, 117, 115,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 117, 115, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ];
    this.mapLayer2 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 91, 0, 0, 94, 95, 0, 90,
      91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 94, 95, 66, 90, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 0, 66, 110,
      111, 0, 106, 107, 0, 0, 0, 0, 195, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 110, 111, 0, 106, 107, 0, 96, 15, 16, 0, 0, 0, 0, 0,
      0, 163, 164, 0, 126, 127, 0, 96, 15, 16, 0, 0, 0, 211, 212, 0, 0, 0, 66,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 0, 219, 220, 221, 112,
      31, 32, 0, 0, 0, 0, 0, 0, 179, 180, 0, 142, 143, 0, 112, 31, 32, 0, 0, 0,
      226, 227, 0, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142,
      143, 0, 235, 236, 237, 0, 47, 48, 0, 0, 0, 0, 0, 0, 230, 231, 0, 0, 0, 0,
      0, 47, 48, 0, 0, 0, 242, 243, 0, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 247,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 89,
      0, 0, 0, 88, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 192, 158,
      159, 160, 156, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206,
      208, 174, 175, 176, 172, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      62, 63, 64, 0, 0, 52, 53, 0, 0, 68, 69, 0, 0, 70, 71, 0, 0, 56, 57, 0, 0,
      72, 73, 0, 0, 0, 0, 0, 58, 0, 0, 75, 0, 0, 59, 0, 0, 0, 60, 0, 0, 0, 0, 0,
      0, 0, 0, 78, 79, 80, 0, 0, 66, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ];

  }

  addObjects() {
    // let canvas = document.getElementById('game-box-2');
    // this.ctx2.clearRect(0,0, canvas.width, canvas.height);
    let tileAtlas = new Image();
    tileAtlas.src = "./assets/tileset.png";
    tileAtlas.onload = () => {
      let mapIndex = 0;
      let sourceX = 0;
      let sourceY = 0;
      
      for (let col = 0; col < this.mapHeight; col += this.tileSize) {
        for (let row = 0; row < this.mapWidth; row += this.tileSize) {
          let tileVal = this.mapLayer2[mapIndex];
          if (tileVal != 0) {
            tileVal -= 1;
            sourceY = Math.floor(tileVal / this.atlasCol) * this.tileSize;
            sourceX = (tileVal % this.atlasCol) * this.tileSize;
            this.ctx.drawImage(
              tileAtlas,
              sourceX,
              sourceY,
              this.tileSize,
              this.tileSize,
              row,
              col,
              this.tileSize,
              this.tileSize
            );
          }
          mapIndex++;
        }
      }
    };
    
    
  }

  draw() {
    
    let tileAtlas = new Image();
    tileAtlas.src = "./assets/tileset.png";
    tileAtlas.onload = () => {
      let mapIndex = 0;
      let sourceX = 0;
      let sourceY = 0;
      for (let col = 0; col < this.mapHeight; col += this.tileSize) {
        for (let row = 0; row < this.mapWidth; row += this.tileSize) {
          let tileVal = this.mapLayer1[mapIndex];
          if (tileVal != 0) {
            tileVal -= 1;
            sourceY = Math.floor(tileVal / this.atlasCol) * this.tileSize;
            sourceX = (tileVal % this.atlasCol) * this.tileSize;
            this.ctx.drawImage(
              tileAtlas,
              sourceX,
              sourceY,
              this.tileSize,
              this.tileSize,
              row,
              col,
              this.tileSize,
              this.tileSize
            );
          }
          mapIndex++;
        }
      }
    };
    this.addObjects();
    window.requestAnimationFrame(() =>
      setTimeout(() => {
        this.player.draw();
      })
    )
  }
}

export default View;
