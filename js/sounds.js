class Sound {
  constructor(source) {
    this.sound = document.createElement("audio");
    this.sound.src = source;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    }
    
    play = function(){
      this.sound.play();
    }
    stop = function(){
      this.sound.pause();
    }
}