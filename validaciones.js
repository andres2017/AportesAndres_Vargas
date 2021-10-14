
function validar_nombreUsuario(String){

    var nombreUsuario = document.getElementById("in_usuario").value;

    var patron=/^[A-Za-z0-9]*$/;

    if(nombreUsuario === "") {
    	alert("Registre datos en el Campo de Nombre");
    	return false;
    }
    if (nombreUsuario.length<3) {
		alert("El nombre es muy corto");
		return false;
	}

	if (nombreUsuario.length > 3 && nombreUsuario.length < 10 && /\w/.test(nombreUsuario)) {
        return true
    }


    if (nombreUsuario.length>9) {
		alert("El nombre es muy largo");
		return false;
	}

    if (nombreUsuario.search(patron)){
    	alert("Los datos o caracteres no son Validos")
    	return false;
    }

}

function validar_contrasena(string) {

	var contrasena = document.getElementById("in_contrasena").value;

	var patron=/^[A-Za-z0-9]*$/;

	if(contrasena === "") {
    	alert("Registre datos en el Campo de Contraseña");
    	return false;
    }
    if (contrasena.length<6) {
		alert("La contraseña debe tener mas caracteres");
		return false;
	}

	if (contrasena.length > 5 && /\w/.test(contrasena)) {
        return true
    }
    
    if (contrasena.search(patron)){
    	alert("Los datos o caracteres no son Validos")
    	return false;
    }

}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;


