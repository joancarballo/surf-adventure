window.onload = function () {
  document.getElementById("startBtn").onclick = function () {
    document.getElementById("startBtn").innerHTML = "RESET";
    Game.init()
  } 
};
