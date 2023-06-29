function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const ccpaswd = document.getElementById("ccpaswd").value;

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


 // Validación del campo contrasena
  const caracteresValidosContrasena = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[#%/&])[A-Za-z\d#%/&]{15,20}$/;
  if (contrasena.trim() === "" || contrasena.length > 20 || contrasena.length < 15 || !caracteresValidosContrasena.test(contrasena)) {
    alert("Por favor, ingresa una contraseña válida (entre 15 y 20 caracteres con al menos una mayúscula, una minúscula, un número y un caracter especial [#%/&]).");
    return false;
  }

  // Validación del campo ccpaswd
  if (ccpaswd.trim() === "" || ccpaswd.length > 20 || ccpaswd.length < 15 || !caracteresValidosContrasena.test(ccpaswd)) {
    alert("Por favor, ingresa una confirmación de contraseña válida (entre 15 y 20 caracteres con al menos una mayúscula, una minúscula, un número y un caracter especial [#%/&]).");
    return false;
  }

  // Validación de la igualdad de contraseñas
  if (contrasena !== ccpaswd) {
    alert("La confirmación de contraseña no coincide con la contraseña ingresada.");
    return false;
  }

  return true;




}

