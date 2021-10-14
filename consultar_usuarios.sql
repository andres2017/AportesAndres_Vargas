SELECT * FROM usuarios ORDER BY id, usuario, fecha_registro



//*CREATE TABLE usuarios(
    id integer not null AUTO_INCREMENT,
    usuario varchar(256) not null,
    contrasena varchar(256) not null,
    PRIMARY KEY (id) 
    )

 *//




//* DML SENTENCIAS 

	tambien llamados CRUD

	// INSERT ---AGREGAR //////////////////////////////

	Ejemplo1: 

	INSERT INTO usuarios(usuario,contrasena)
	VALUES ('nombre1','contrasena1')


	Ejemplo2:


	INSERT INTO (usuarios(usuario,contrasena)) VALUES
	('nombre1',contrasena1)
	('nombre2',contrasena2)
	('nombre3',contrasena3)

	Ejemplo: cambiar el numero del id

	INSERT INTO usuarios(id,usuario,contrasena) VALUES 
	('1','username1','contrasenasegura')

	///////////////////////////////////////////////////

	UPDATE ---ACTUALIZAR

	DELETE ---ELIMINAR

    /////////////////////////////////////////////////////////////

	SELECT ---MOSTRAR -BUSCAR

	Ejemplo1:

	SELECT * FROM usuarios ORDER BY id, usuario, fecha_registro

	SELECT * FROM usuarios ORDER BY id, usuario, contrasena DESC LIMIT 3

	SELECT id, usuario FROM usuarios ORDER BY id DESC




 *//
