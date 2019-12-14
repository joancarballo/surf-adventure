const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  playerKeys: {
    SPACE: 32,
  },
  score: 0,

  init: function() {
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
    //this.generateObstacles()
    window.requestAnimationFrame(movimiento.bind(this))
    // this.interval = setInterval(() => {

    //   this.clear();
    //   this.drawAll();
    //   this.moveAll();

    //this.clearObstacles()
    this.framesCounter++;
    //if(this.framesCounter % 70 === 0) this.generateObstacles()
    //if(this.framesCounter % 100 === 0) this.score++;
    //   // if(this.isCollision()) this.gameOver()
    // if(this.framesCounter > 1000) this.framesCounter = 0;
    // }, 1000/this.fps)
    // if (this.playing = 1){
    //   document.getElementById('start-button').onclick = function() {
         //Game.reset()
    //     Game.clear()
    //     Game.start()
    //     this.playing = 0;
    //     };
    //} 
  },

  drawAll: function() {
    this.background.draw();
    this.ola.draw();
    this.player.draw();
    this.obstacles.forEach(obstacle => obstacle.draw())
    //this.obstacles.draw()
   // this.player.animate();
  },

  moveAll: function() {
    //this.background.move()
    this.player.move()
    this.obstacles.forEach(obstacle => obstacle.move())
    this.ola.move()
  },

  generateObstacles: function() {
    this.obstacles.push(new Obstacles(this.ctx, 70, 70, this.width, this.height))
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 150, 150, this.width, this.height,);
    this.ola = new Ola(this.ctx, 800, 150, this.width, this.height,);
    this.obstacles = [];
    //ScoreBoard.init(this.ctx, this.score)
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= -200))
  }

}

function movimiento(){

    this.framesCounter++;
    
    this.clear();
    this.clearObstacles()
    this.drawAll();
    this.moveAll();

    // this.clearObstacles()
     if(this.framesCounter % 70 === 0) this.generateObstacles()
    // if(this.framesCounter % 100 === 0) this.score++;
    // if(this.isCollision()) this.gameOver()
    // if(this.framesCounter > 1000) this.framesCounter = 0;
    window.requestAnimationFrame(movimiento.bind(this))
}