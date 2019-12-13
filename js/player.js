class Player {
  constructor(ctx, width, height, gameWidth, gameHeight,) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = './images/surfer.png';
    this.posX = 100;
    this.posY = gameHeight * 0.8 - this.height ;
    this.posY0 = gameHeight * 0.8 - this.height ;
    this.posYmax = 90;
    this.posVaiven = 100;
    this.vel = this.posY0;
    this.gravity = 5;
    this.gameWidth = gameWidth;

    // this.frames = 3;
    // this.framesIndex = 0;

    // this.keys = keys;
    // this.bullets = [];
     this.setListeners()
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }

  move() {
      if(this.posY <= this.posY0) {
        this.posY += this.vel;
        this.vel += this.gravity;
      } else {
        this.vel = 15;
        this.posY = this.posY0;
      }
  }

  setListeners() {
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case 32:
            if(this.posY >= this.posY0) {
              this.posY -= this.vel;
              this.vel -= 60;
            }
            break;
      }
    })
  }


}