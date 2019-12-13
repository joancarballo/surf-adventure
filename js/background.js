class Background {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = './images/bg.jpg';

    this.posX = 0;
    this.posY = 0;

    // this.vx = 8;
  }

  draw() {
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height);
    // this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height) */
  }
}