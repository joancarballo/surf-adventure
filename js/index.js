window.onload = function () {

  Game.init();


  var isStart = true;
  var isPaused = false;
  var startBtn = document.getElementById("startBtn");
  var pauseBtn = document.getElementById("stopBtn");

  startBtn.onclick = function () {
    startBtn.blur();

    if (isStart) {
      isStart = false;
      startBtn.innerHTML = "RESET";
      Game.start();
    } else {
      Game.reset();
    }

  }

  pauseBtn.onclick = function () {
    pauseBtn.blur();
    if ( isPaused ) {
      isPaused = false;
      Game.resumeGame();
    } else {
      isPaused = true;
      Game.stopGame();
    }
  }

};
