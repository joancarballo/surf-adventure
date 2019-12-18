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
  //score: 0,
  requestId: undefined,
  stop: false,
  sharkJumped: 0,
  obstaculoSiguienteAleatorio: 60,
  sharksJumped: 0,
  sharksCount: 0,



  init: function() {
    this.canvas = document.getElementById('game-surf');
    this.ctx = this.canvas.getContext('2d');
    this.width = 800;
    this.height = 450;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#1262DC";
    
    //this.btnStart = document.getElementById("startBtn");
    //this.btnStop = document.getElementById("stopBtn");
    
    //this.start();
  },
  
  stopGame: function() {
    this.stop = true;
    if ( this.requestId ) {
      window.cancelAnimationFrame( this.requestId );
      this.requestId = undefined;
    }
  },

  resumeGame: function() {
    this.stop = false;
    this.requestId = window.requestAnimationFrame(this.movimiento.bind(this));
  },
  
  reset: function() {
    this.stopGame();
    this.start();
  },
  
  start: function() {
    this.initSprites();

    this.timeVar = new Date();
    
    this.stop = false;

    this.framesCounter = 0;
    this.sharksJumped = 0;
    this.sharksCount = 0;
    this.obstaculoSiguienteAleatorio = 100;

    //this.obstaclesVx = 5;
    this.level = 1;

    this.requestId = window.requestAnimationFrame(this.movimiento.bind(this));
  },
  
  initSprites: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 100, 100, this.width, this.height);
    this.ola = new Ola(this.ctx, 800, 150, this.width, this.height);
    this.obstacles = [];
    //ScoreBoard.init(this.ctx, this.score)
  },
  movimiento: function(){

    // compruebo que el juego está parado
    if ( this.stop ) {
      return;
    }

    this.framesCounter++;

    // limpio canvas
    this.clear();

    // borro obstáculos que están fuera de pantalla
    this.clearObstacles();

    
    this.drawAll();

    // actualizo posiciones de sprites
    this.moveAll();

    // Aumento de dificultad
    if(this.framesCounter % 180 === 0) this.level = this.level + 2;

    
    
    if(this.framesCounter >= this.obstaculoSiguienteAleatorio) this.generateObstacles();
    if(this.isCollision()) this.gameOver();

    
    this.requestId = window.requestAnimationFrame(this.movimiento.bind(this));
    
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
    var obstaclesVx = 5 + this.level;
    var minFramesDistance = 60;
    var maxFramesDistance = Math.min( minFramesDistance, 170 - ( this.level * 2 ) );
  

    this.sharksCount++
    this.obstacles.push(new Obstacles(this.ctx, 50, 50, this.width, this.height, obstaclesVx))
    this.obstaculoSiguienteAleatorio = this.framesCounter + minFramesDistance + (Math.floor(Math.random()*maxFramesDistance))
    console.log("Siguiente obstáculo en..." + this.obstaculoSiguienteAleatorio)
  },


  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  clearObstacles: function() {
    // borro tiburones que están fuera
    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= -60));
    // recalculo puntuación de tiburones: total - los que hay en pantalla
    this.sharksJumped = this.sharksCount - this.obstacles.length;
  },

  isCollision: function() {
    return this.obstacles.some(obs => ((this.player.posX + this.player.width) - 40 > obs.posX && (obs.posX + obs.width - 30) > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ))
  },

   gameOver: function() {
      this.totalTiempo = (new Date() - this.timeVar)/1000
      this.ctx.fillRect(60, 60, 680, 330)
      console.log("GAME OVER")
      this.ctx.save()
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillText("JAJAJAJAJA CHOF JAJAJAJAJA", 170, 100);
      this.ctx.fillText("GAME OVER", 300, 150);
      this.ctx.fillText("Tiburones saltados: " + this.sharksJumped, 250, 250);
      this.ctx.fillText("Total Tiempo: " + this.totalTiempo, 250, 300)
      this.ctx.restore(),


      // AQUÍ TENGO QUE HACER QUE EN MEDIO DEL CANVAS APAREZCA LA PUNTUACIÓN
      // PUNTUACIÓN = TIBURONES SALTADOS
      // PUNTUACIÓN BONUS = TIBURONES SALTADOS * SEGUNDOS JUGADOS (TIEMPO AÚN POR IMPLEMENTAR)

      this.stopGame();


      /*
      var id = window.requestAnimationFrame(function(){});
      while(id--){
        window.cancelAnimationFrame(id);
      }
      */
    console.log("GAME MOTHERFUCKING OVER")
    console.log("Tiburones saltados: " + this.sharksJumped)
  }

}

