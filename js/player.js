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
    this.posYmax = 50;
    this.gravity = 0.3;
    this.gameWidth = gameWidth;
    this.vy = 2;
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
      this.posY += this.vy;
      this.vy += this.gravity;
    } else {
      this.vy = 1;
      this.posY = this.posY0;
    }

  }

  salta() {
      this.posY -= this.vy;
      this.vy -= 10;
  }

  setListeners() {
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case 32:
            if (this.posY >= this.posY0) {
              this.salta();
            }
            break;
      }
    })
  }


}