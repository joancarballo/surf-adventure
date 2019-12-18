class Obstacles {
  constructor(ctx, width, height, gameWidth, gameHeight, vx) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = './images/shark.png';

    this.sharkSound = new Sound("sounds/shark.m4a");

    this.posX = gameWidth;
    this.posY = gameHeight * 0.9 - this.height ;

    this.vx = vx;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    this.sharkSound.play()
  }

  move() {
    this.posX -= this.vx;
  }
}