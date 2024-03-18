document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Simulación de envío de correo electrónico (sin backend)
  setTimeout(function() {
    document.getElementById("message-success").style.display = "block";
  }, 2000); // Simular un retraso de 2 segundos para el envío del mensaje
});
