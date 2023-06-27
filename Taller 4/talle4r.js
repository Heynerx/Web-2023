function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const usuario = document.getElementById("usuario").value;

  // Validación del campo nombre
  if (nombre.trim() === "" || nombre.length > 25) {
    alert("Por favor, ingresa un nombre válido (máximo 25 caracteres).");
    return false;
  }

  // Validación del campo apellido
  if (apellido.trim() === "" || apellido.length > 25) {
    alert("Por favor, ingresa un apellido válido (máximo 25 caracteres).");
    return false;
  }

  // Validación del campo dirección
  const palabrasClave = ["cll", "cra", "av", "anv", "trans"];
  const direccionValida = palabrasClave.some(palabra => direccion.toLowerCase().startsWith(palabra));
  if (!direccionValida) {
    alert("Por favor, ingresa una dirección válida que empiece con cll, cra, av, anv o trans.");
    return false;
  }

  // Validación del campo usuario
  const caracteresValidos = /^[a-zA-Z0-9]+$/;
  if (usuario.trim() === "" || usuario.length > 20 || usuario.length < 10 || !caracteresValidos.test(usuario)) {
    alert("Por favor, ingresa un usuario válido (entre 10 y 20 caracteres alfanuméricos).");
    return false;
  }




  return true;
}

