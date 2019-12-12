class Player {
  constructor(ctx, width, height, gameWidth, gameHeight,) {
    console.log("Construye al jugador")
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    console.log("1")
    this.image = new Image();
    this.image.src = 'images/surfer.png';
    console.log("2")
    this.posX = 50;
    this.posY = gameHeight * 0.98 - this.height ;
    //this.posY0 = gameHeight * 0.98 - this.height ;
    this.vy = 1;
    this.gravity = 0.4;
    this.gameWidth = gameWidth;
    console.log("3")

    // this.frames = 3;
    // this.framesIndex = 0;

    // this.keys = keys;
    // this.bullets = [];
    // this.setListeners()
  }

  draw() {
    this.ctx.drawImage(
      console.log("Pinta al surfero"),
      this.image, 
      console.log("1"),
      // this.framesIndex * Math.floor(this.image.width / this.frames),
      //  0,
      // Math.floor(this.image.width / this.frames),
      this.image.height,
      this.posX, 
      console.log("2"),
      this.posY, 
      console.log("3"),
      this.width, 
      console.log("4"),
      this.height,
      console.log("5"),
      ),
      console.log("Acaba de pintar al surfero")
      //this.clearBullets()
      //this.bullets.forEach(bullet => bullet.draw())
      //this.animate(framesCounter)
  }


}