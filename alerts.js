function CustomAlert(){
  this.alert = function(title){
    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox');
  }
  
  this.ok = function(){
    Particles.init({
      selector: '.background',
      maxParticles: 200,
      color: ["#000000", "#7a7a7a", "#ffffff"],
      connectParticles: true
    });
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}

let customAlert = new CustomAlert();