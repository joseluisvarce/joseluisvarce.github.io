document.getElementById("message-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Simplemente muestra un mensaje de éxito
  document.getElementById("message-success").style.display = "block";

  // Aquí se puede agregar código para enviar el formulario por correo electrónico
  // Sin embargo, para hacer esto, se requeriría una implementación del lado del servidor
});
