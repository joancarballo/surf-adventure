window.onload = function () {

  Game.init();


  //var pantalla = 'inicio'; // jugando, gameover

  document.getElementById("startBtn").onclick = function () {
    document.getElementById("startBtn").blur();
    document.getElementById("startBtn").innerHTML = "RESET";
    //pantalla = 'jugando';
    Game.start();
  } 
  // ARREGLAR QUE HAYA UN PLAY Y UN RESET QUE FUNCIONEN, AHORA INICIA CADA VEZ QUE ABRES EL JUEGO
};
