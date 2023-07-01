function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const ccpaswd = document.getElementById("ccpaswd").value;


  if (nombre.trim() === "" || nombre.length > 25) {
    alert("Por favor, ingresa un nombre válido (máximo 25 caracteres).");
    return false;
  }


  if (apellido.trim() === "" || apellido.length > 25) {
    alert("Por favor, ingresa un apellido válido (máximo 25 caracteres).");
    return false;
  }


  const palabrasClave = ["cll", "cra", "av", "anv", "trans"];
  const direccionValida = palabrasClave.some(palabra => direccion.toLowerCase().startsWith(palabra));
  if (!direccionValida) {
    alert("Por favor, ingresa una dirección válida que empiece con cll, cra, av, anv o trans.");
    return false;
  }


  const caracteresValidosContrasena = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[#%/&]).*$";
  if (contrasena.trim() === "" || contrasena.length > 20 || contrasena.length < 15 || !caracteresValidosContrasena.test(contrasena)) {
    alert("Por favor, ingresa una contraseña válida (entre 15 y 20 caracteres con al menos una mayúscula, una minúscula, un número y un caracter especial [#%/&]).");
    return false;
  }


  if (ccpaswd.trim() === "" || ccpaswd.length > 20 || ccpaswd.length < 15 || !caracteresValidosContrasena.test(ccpaswd)) {
    alert("La dos contraseñas tienen que ser iguales");
    return false;
  }


  if (contrasena !== ccpaswd) {
    alert("La confirmación de contraseña no coincide con la contraseña ingresada.");
    return false;
  }

  return true;
}

function mostrarCajaTexto(opcion) {
  const cajaTexto = document.getElementById("cajaTexto");
  const gustoTexto = document.getElementById("gustoTexto");

  if (opcion === "color") {
    cajaTexto.style.display = "block";
    gustoTexto.placeholder = "Escribe tu color favorito";
  } else if (opcion === "marca") {
    cajaTexto.style.display = "block";
    gustoTexto.placeholder = "Escribe tu marca de carro favorita";
  } else if (opcion === "modelo") {
    cajaTexto.style.display = "block";
    gustoTexto.placeholder = "Escribe tu modelo de carro favorito";
  } else {
    cajaTexto.style.display = "none";
    gustoTexto.value = "";
  }
}

function mostrarValores() {
  const rangoMinimo = document.getElementById("rangoMinimo");
  const rangoMaximo = document.getElementById("rangoMaximo");
  const valorMinimo = document.getElementById("valorMinimo");
  const valorMaximo = document.getElementById("valorMaximo");

  valorMinimo.innerHTML = "Valor mínimo: " + rangoMinimo.value+' COP';
  valorMaximo.innerHTML = "Valor máximo: " + rangoMaximo.value+' COP';
}
