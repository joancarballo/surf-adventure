const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  playerKeys: {
    SPACE: 32
  },
  score: 0,

  init: function() {
    console.log("Init llamado")
    this.canvas = document.getElementById('game-surf');
    this.ctx = this.canvas.getContext('2d');
    this.width = 800;
    this.height = 450;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start: function() {
    this.reset()
    console.log("Start Llamada")
    this.interval = setInterval(() => {
      this.framesCounter++;

      // this.clear();
      this.drawAll();
      // this.moveAll();

      // this.clearObstacles()
      // if(this.framesCounter % 70 === 0) this.generateObstacles()
      // if(this.framesCounter % 100 === 0) this.score++;
      // if(this.isCollision()) this.gameOver()
      // if(this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000/this.fps)
    // if (this.playing = 1){
    //   document.getElementById('start-button').onclick = function() {
    //     Game.reset()
    //     Game.clear()
    //     Game.start()
    //     this.playing = 0;
    //     };
    // } 
  },

  drawAll: function() {
    this.background.draw();
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    //this.player = new Player(this.ctx, 50, 150, 'img/player.png', this.width,this.height, this.playerKeys);
    //this.obstacles = [];
    //ScoreBoard.init(this.ctx, this.score)
  },

}