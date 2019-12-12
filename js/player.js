class Player {
  constructor(ctx, width, height, gameWidth, gameHeight,) {
    console.log("Construye al jugador");
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    console.log("1");
    this.image = new Image();
    this.image.src = './images/surfer.png';
    console.log("Imagen Cargada")
    this.posX = 100;
    this.posY = gameHeight * 0.8 - this.height ;
    //this.posY0 = gameHeight * 0.98 - this.height ;
    //this.vy = 1;
    //this.gravity = 0.4;
    this.gameWidth = gameWidth;
    console.log("3");

    // this.frames = 3;
    // this.framesIndex = 0;

    // this.keys = keys;
    // this.bullets = [];
    // this.setListeners()
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }


}