var particlegen;

window.onload = function() {
  particlegen = Particles.init({
    selector: '.background',
    maxParticles: 200,
    color: ["#000000", "#7a7a7a", "#ffffff"],
    connectParticles: true
  });
};
