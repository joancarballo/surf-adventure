class Ola {
  constructor(ctx, width, height, gameWidth, gameHeight,) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = './images/ola-surfear.png';
    this.posX = 0;
    this.posY = gameHeight - this.height ;
    //this.posY0 = gameHeight * 0.98 - this.height ;
    //this.vy = 1;
    this.vx = 4;
    //this.gravity = 0.4;
    this.gameWidth = gameWidth;

    // this.frames = 3;
    // this.framesIndex = 0;

    // this.keys = keys;
    // this.bullets = [];
    // this.setListeners()
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height)
  }

  move() {
    this.posX -= this.vx;
    if(this.posX <= -this.width) this.posX = 0;
  }


}