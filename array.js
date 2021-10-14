
//var Tripulantes=[]
//function agregarRegistro()
//{

	//console.log(Tripulantes.length)
	//var nombre=document.getElementById("in_usuario").value
	//var contrasena=document.getElementById("in_contrasena").value

	//let Persona_T={"Nombre":nombre,"Contraseña":contrasena}
	//console.log("obj persona tripulante: "+Persona_T)

	//Tripulantes.push(Persona_T)
	//console.log(Tripulantes)
	//console.log(Tripulantes.length)
//}

//

let registros = [];

function agregarRegistro() {

	let nombreUsuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;


     registros.push({usuario: nombreUsuario, password: contrasena})
}

function filtrarPorContrasena(arreglo, filtro){

	if(registros.length<6)
	{
		registros.push(arreglo)
	}
	else
	{
		alert("arreglo con 6 caracteres")
	}


	if(registros.length<16)
	{
		registros.push(arreglo)
	}
	else
	{
		alert("arreglo con 16 caracteres")
	}

    console.log(registros)
  
    
}