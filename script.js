const numSpheres = 20; // Número de esferas
const container = document.querySelector('.container');

// Crear las esferas
for (let i = 0; i < numSpheres; i++) {
  const sphere = document.createElement('div');
  sphere.classList.add('sphere');
  container.appendChild(sphere);
}

// Animación de las esferas
const spheres = document.querySelectorAll('.sphere');
spheres.forEach(sphere => {
  const size = Math.random() * 50 + 10; // Tamaño aleatorio
  const duration = Math.random() * 5 + 3; // Duración de la animación aleatoria

  sphere.style.width = `${size}px`;
  sphere.style.height = `${size}px`;
  sphere.style.opacity = `${Math.random() * 0.5 + 0.3}`; // Opacidad aleatoria

  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  sphere.style.left = `${randomX}px`;
  sphere.style.top = `${randomY}px`;

  const randomDelay = Math.random() * 3; // Retraso aleatorio
  sphere.style.animation = `move ${duration}s linear ${randomDelay}s infinite`;

  container.appendChild(sphere);
});
