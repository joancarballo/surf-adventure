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
  requestId: undefined,
  stop: false,
  sharkJumped: 0,
  obstaculoSiguienteAleatorio: 60,
  sharksJumped: 0,
  sharksCount: 0,

  min: 0,
  second: 00,
  zeroPlaceholder: 0,

  init: function() {
    this.canvas = document.getElementById('game-surf');
    this.ctx = this.canvas.getContext('2d');
    this.width = 800;
    this.height = 450;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#1262DC";

    this.start();
  },

  start: function() {
    this.reset()
 
    this.requestId = window.requestAnimationFrame(movimiento.bind(this))
    this.timerVar = window.setInterval(countUp(), 1000),

    this.framesCounter++;
  },

  countUp: function() {
    this.second++;
    if(this.second == 59){
      this.second = 00;
      this.min = this.min + 1;
    }
    if(this.second == 10){
        this.zeroPlaceholder = '';
    }else
    if(this.second == 00){
        this.zeroPlaceholder = 0;
    }
  },

  drawAll: function() {
    this.background.draw();
    this.ola.draw();
    this.player.draw();
    this.obstacles.forEach(obstacle => obstacle.draw())

   // this.player.animate();
  },

  moveAll: function() {
    this.player.move()
    this.obstacles.forEach(obstacle => obstacle.move())
    this.ola.move()
  },

  generateObstacles: function() {
    this.sharksCount++
    this.obstacles.push(new Obstacles(this.ctx, 50, 50, this.width, this.height))
    this.obstaculoSiguienteAleatorio = 200 + (Math.floor(Math.random()*150))
    console.log("Siguiente obstáculo en..." + this.obstaculoSiguienteAleatorio)
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 100, 100, this.width, this.height,);
    this.ola = new Ola(this.ctx, 800, 150, this.width, this.height,);
    this.obstacles = [];
    //ScoreBoard.init(this.ctx, this.score)
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  clearObstacles: function() {
    var jumpedSharks = 0
    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= -60))
    jumpedSharks =  jumpedSharks + this.obstacles.length
    this.sharksJumped = this.sharksCount - jumpedSharks;
  },

  isCollision: function() {
    return this.obstacles.some(obs => ((this.player.posX + this.player.width) - 40 > obs.posX && (obs.posX + obs.width - 30) > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ))
  },

   gameOver: function() {
      this.ctx.fillRect(60, 60, 680, 330)
      console.log("GAME OVER")
      this.ctx.save()
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillText("JAJAJAJAJA CHOF JAJAJAJAJA", 170, 100);
      this.ctx.fillText("GAME OVER", 300, 150);
      this.ctx.fillText("Tiburones saltados: " + this.sharksJumped, 250, 250);
      this.ctx.fillText("Total Tiempo: " + this.timerVar, 250, 300)
      this.ctx.restore(),


      // AQUÍ TENGO QUE HACER QUE EN MEDIO DEL CANVAS APAREZCA LA PUNTUACIÓN
      // PUNTUACIÓN = TIBURONES SALTADOS
      // PUNTUACIÓN BONUS = TIBURONES SALTADOS * SEGUNDOS JUGADOS (TIEMPO AÚN POR IMPLEMENTAR)

    this.stop = true
      var id = window.requestAnimationFrame(function(){});
      while(id--){
        window.cancelAnimationFrame(id);
      }
    console.log("GAME MOTHERFUCKING OVER")
    console.log("Tiburones saltados: " + this.sharksJumped)
  }

}

function movimiento(){

    this.framesCounter++;

    this.clear();
    this.clearObstacles()
    this.drawAll();
    this.moveAll();

    if(this.framesCounter % this.obstaculoSiguienteAleatorio === 0) this.generateObstacles();
    if(this.isCollision()) this.gameOver();
    if(this.framesCounter > 1500) this.framesCounter = 0;
    if(!this.stop) this.requestId =   window.requestAnimationFrame(movimiento.bind(this));
    
}