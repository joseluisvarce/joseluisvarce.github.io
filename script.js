const numSpheres = 10; // Número de esferas
const background = document.querySelector('.background');

// Crear las esferas
for (let i = 0; i < numSpheres; i++) {
  const sphere = document.createElement('div');
  sphere.classList.add('sphere');
  background.appendChild(sphere);
}
