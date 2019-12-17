window.onload = function () {

  Game.init();


  var isStart = true;
  var isPaused = false;
  var startBtn = document.getElementById("startBtn");
  var stopBtn = document.getElementById("stopBtn");

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

  stopBtn.onclick = function () {
    stopBtn.blur();
    if ( isPaused ) {
      isPaused = false;
      Game.resumeGame();
    } else {
      isPaused = true;
      Game.stopGame();
    }
  }

};
