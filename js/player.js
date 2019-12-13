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
    this.posYmax = 100;
    this.gravity = 1;
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
    if (this.posY != this.posY0){  // Esto limita que el surfero caiga hasta el infinito
      this.posY += (this.gravity * 5);
    }

  }

  salta() {
    if (this.posY != this.posYmax) {
      this.posY -= (this.gravity * this.posYmax);
      // for (let i= 0; i < this.posYmax; i++) {
      //   this.posY -= (this.gravity * 5);
      //   console.log("Salto" + i)
      // }
    } 
  }

  setListeners() {
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case 32:
            this.salta();
            break;
      }
    })
  }


}