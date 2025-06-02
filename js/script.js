// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      e.preventDefault(); // Detiene el envío
    }
  });
});
