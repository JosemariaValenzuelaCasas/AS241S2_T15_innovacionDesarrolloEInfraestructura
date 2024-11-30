document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

  // Recoge los datos del formulario
  fetch("/validar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }),
  })
    .then((response) => response.json()) // Espera la respuesta del servidor en formato JSON
    .then((data) => {
      if (data.success) {
        // Muestra el mensaje de éxito
        document.getElementById("response-message").innerText = data.message;
        document.getElementById("myForm").reset(); // Limpiar el formulario
      } else {
        // Si ocurre algún error
        document.getElementById("response-message").innerText =
          "Hubo un error al registrar la pregunta.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("response-message").innerText =
        "Hubo un problema con la solicitud.";
    });
});
