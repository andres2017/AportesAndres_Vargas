let registros =[]



function agregarRegistro()
    {

    var usuario = document.getElementById("in_usuario").value
    var contrasena = document.getElementById("in_contrasena").value



    registros.push({"usuario": usuario, "contrasena": contrasena})
    console.log(registros.length)

    }



function filtrarPorContrasena(arreglo, filtro){

    

    let filtrado = arreglo.filter(elemento=>elemento.contrasena.length <= filtro) 
    console.log(filtrado)
    return filtrado

}


module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro; 